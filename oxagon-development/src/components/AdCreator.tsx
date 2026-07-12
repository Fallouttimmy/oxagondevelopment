import React, { useEffect, useRef, useState } from "react";

export default function AdCreator() {
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
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

  useEffect(() => {
    function down(e: KeyboardEvent) {
      pressed.current[e.key.toLowerCase()] = true;
      checkComboStart();
    }
    function up(e: KeyboardEvent) {
      pressed.current[e.key.toLowerCase()] = false;
      cancelCombo();
    }

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  function comboPressed() {
    // check if a,s,d,f are pressed (no shift required)
    const p = pressed.current;
    return p["a"] && p["s"] && p["d"] && p["f"];
  }

  function checkComboStart() {
    if (comboPressed() && timer.current == null) {
      // start 10s countdown
      let remaining = 10;
      setCountdown(remaining);
      timer.current = window.setInterval(() => {
        remaining -= 1;
        setCountdown(remaining);
        if (remaining <= 0) {
          // open modal
          if (timer.current) {
            window.clearInterval(timer.current);
            timer.current = null;
          }
          setCountdown(null);
          setOpen(true);
        }
      }, 1000) as unknown as number;
    }
  }

  function cancelCombo() {
    if (!comboPressed() && timer.current != null) {
      window.clearInterval(timer.current);
      timer.current = null;
      setCountdown(null);
    }
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

  return (
    <>
      {/* small hidden indicator when countdown active */}
      {countdown != null && (
        <div className="fixed right-4 top-20 z-50 px-3 py-1 rounded bg-white/10 text-sm text-white">Opening ad creator in {countdown}s</div>
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
                <button onClick={() => { const sample = buildAdObject(); navigator.clipboard.writeText(JSON.stringify(sample, null, 2)); }} className="px-3 py-2 rounded border border-white/10 text-sm">Copy preview</button>
                <button onClick={() => setOpen(false)} className="px-3 py-2 rounded border border-white/10 text-sm">Close</button>
                {copied && <div className="ml-2 text-sm text-green-400">Copied!</div>}
              </div>

              <div className="mt-2 text-xs text-gray-400">Tip: Hold A+S+D+F for 10s anywhere to open this creator.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
