import React, { useEffect, useRef, useState } from "react";

export default function AdCreator() {
  const [open, setOpen] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const pressed = useRef<Record<string, boolean>>({});
  const timer = useRef<number | null>(null);

  // form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [imageName, setImageName] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [displayTime, setDisplayTime] = useState<number>(5);
  const [frequency, setFrequency] = useState<number>(20);
  const [placement, setPlacement] = useState("bottom");
  const [active, setActive] = useState(true);
  const [copied, setCopied] = useState(false);

  const HOLD_SECONDS = 3; // how long to hold 'a'

  useEffect(() => {
    function down(e: KeyboardEvent) {
      const k = e.key.toLowerCase();
      pressed.current[k] = true;
      if (k === "a") startHold();
    }
    function up(e: KeyboardEvent) {
      const k = e.key.toLowerCase();
      pressed.current[k] = false;
      if (k === "a") cancelHold();
    }

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, []);

  function startHold() {
    // don't start if already counting or modal open
    if (timer.current != null || open) return;
    setRemaining(HOLD_SECONDS);
    let secs = HOLD_SECONDS;
    timer.current = window.setInterval(() => {
      secs -= 1;
      if (secs <= 0) {
        if (timer.current) {
          window.clearInterval(timer.current);
          timer.current = null;
        }
        setRemaining(null);
        setOpen(true);
        return;
      }
      setRemaining(secs);
    }, 1000) as unknown as number;
  }

  function cancelHold() {
    if (timer.current != null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
    setRemaining(null);
  }

  function generateId(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `ad-${Date.now()}`;
  }

  function buildAdObject() {
    const id = generateId(title || "ad");
    const imagePath = imageName ? `/assets/ads/${imageName}` : "";
    return {
      id,
      title: title || "Untitled Ad",
      content: content || "",
      link: link || "",
      image: imagePath,
      mediaType,
      displayTime: displayTime * 1000, // ms
      frequency: frequency, // percent
      placement,
      active,
    } as const;
  }

  async function copyJSON() {
    const obj = buildAdObject();
    const json = JSON.stringify(obj, null, 2);
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  }

  // spinner click while holding 'a' opens modal immediately
  function onSpinnerClick() {
    if (pressed.current["a"]) {
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
      setRemaining(null);
      setOpen(true);
    }
  }

  // progress ring calculations
  const total = HOLD_SECONDS;
  const rem = remaining ?? 0;
  const progress = (total - rem) / total; // 0..1
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - progress);

  return (
    <>
      {/* spinner indicator top-right when holding 'a' */}
      {remaining != null && (
        <div className="fixed right-4 top-4 z-50">
          <button
            onClick={onSpinnerClick}
            className="w-12 h-12 rounded-full bg-white/6 flex items-center justify-center border border-white/10 hover:bg-white/8"
            aria-label="Open ad creator"
            title="Click to open ad creator while holding 'a'"
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <g transform="translate(20,20)">
                <circle r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="transparent" />
                <circle
                  r={radius}
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashoffset}
                  style={{ transition: "stroke-dashoffset 300ms linear" }}
                />
                <text x="0" y="3" textAnchor="middle" fontSize="10" fill="#fff">{rem}</text>
              </g>
            </svg>
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-[92%] max-w-2xl bg-black/70 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Quick Ad Creator</h3>
            <p className="text-sm text-gray-300 mt-1">Fill the fields, then click "Copy JSON" to paste into <code>/oxagon-development/ads.json</code>.</p>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <input className="p-2 rounded bg-black/50 border border-white/10" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea className="p-2 rounded bg-black/50 border border-white/10" placeholder="Content (HTML allowed)" value={content} onChange={(e) => setContent(e.target.value)} />
              <input className="p-2 rounded bg-black/50 border border-white/10" placeholder="Link (optional)" value={link} onChange={(e) => setLink(e.target.value)} />
              <input className="p-2 rounded bg-black/50 border border-white/10" placeholder="Image filename (place under /public/assets/ads/)" value={imageName} onChange={(e) => setImageName(e.target.value)} />

              <div className="flex gap-2">
                <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="p-2 rounded bg-black/50 border border-white/10">
                  <option value="image">Image</option>
                  <option value="gif">GIF</option>
                  <option value="video">Video</option>
                </select>

                <input type="number" value={displayTime} min={1} onChange={(e) => setDisplayTime(Number(e.target.value))} className="p-2 rounded bg-black/50 border border-white/10" />
                <div className="text-sm text-gray-300 flex items-center">seconds</div>

                <input type="number" value={frequency} min={0} max={100} onChange={(e) => setFrequency(Number(e.target.value))} className="p-2 rounded bg-black/50 border border-white/10" />
                <div className="text-sm text-gray-300 flex items-center">% frequency</div>
              </div>

              <div className="flex gap-2 items-center">
                <select value={placement} onChange={(e) => setPlacement(e.target.value)} className="p-2 rounded bg-black/50 border border-white/10">
                  <option value="bottom">Bottom</option>
                  <option value="top">Top</option>
                </select>

                <label className="flex items-center gap-2 text-sm text-gray-300">
                  <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} /> Active
                </label>
              </div>

              <div className="flex gap-2 mt-2">
                <button onClick={copyJSON} className="px-3 py-2 rounded bg-white text-black font-medium">Copy JSON</button>
                <button
                  onClick={() => {
                    const sample = buildAdObject();
                    navigator.clipboard.writeText(JSON.stringify(sample, null, 2));
                  }}
                  className="px-3 py-2 rounded border border-white/10 text-sm"
                >
                  Copy preview
                </button>
                <button onClick={() => setOpen(false)} className="px-3 py-2 rounded border border-white/10 text-sm">Close</button>
                {copied && <div className="ml-2 text-sm text-green-400">Copied!</div>}
              </div>

              <div className="mt-2 text-xs text-gray-400">Tip: Hold A for 3s anywhere and click the circle while holding to open this creator.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
