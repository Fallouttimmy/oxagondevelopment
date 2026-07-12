import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type AdObject = {
  id: string;
  title: string;
  content: string;
  link?: string;
  image?: string;
  mediaType: string;
  displayTime: number;
  frequency: number;
  placement: string;
  active: boolean;
};

export default function AdCreator() {
  const [ads, setAds] = useState<AdObject[]>([]);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);
  const [showBillboard, setShowBillboard] = useState(false);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTriggerButton, setShowTriggerButton] = useState(false);
  
  const keysPressed = useRef<Record<string, boolean>>({});
  const holdTimer = useRef<number | null>(null);

  // Form States
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

  // 1. Fixed Hotkey Detector Loop
  useEffect(() => {
    function checkKeys() {
      const isMatching =
        keysPressed.current["a"] &&
        keysPressed.current["s"] &&
        keysPressed.current["d"] &&
        keysPressed.current["f"] &&
        keysPressed.current["shift"];

      if (isMatching) {
        if (holdTimer.current === null && !showTriggerButton && !menuOpen) {
          holdTimer.current = window.setTimeout(() => {
            setShowTriggerButton(true);
          }, 10000); // 10 seconds requirement
        }
      } else {
        // Only reset the timer if the button hasn't spawned yet. 
        // This keeps the button on screen so you can click it!
        if (!showTriggerButton) {
          clearHold();
        }
      }
    }

    function clearHold() {
      if (holdTimer.current !== null) {
        window.clearTimeout(holdTimer.current);
        holdTimer.current = null;
      }
    }

    function down(e: KeyboardEvent) {
      const key = e.key.toLowerCase();
      keysPressed.current[key] = true;
      if (e.shiftKey) keysPressed.current["shift"] = true;
      checkKeys();
    }

    function up(e: KeyboardEvent) {
      const key = e.key.toLowerCase();
      keysPressed.current[key] = false;
      if (!e.shiftKey) keysPressed.current["shift"] = false;
      checkKeys();
    }

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      clearHold();
    };
  }, [showTriggerButton, menuOpen]);

  // 2. Load and Rotate Ads
  useEffect(() => {
    fetch("/ads.json")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: AdObject[]) => {
        if (Array.isArray(data)) {
          setAds(data.filter((ad) => ad.active !== false));
        }
      })
      .catch(() => setAds([]));
  }, [menuOpen]);

  useEffect(() => {
    if (ads.length === 0) {
      setShowBillboard(false);
      return;
    }

    const currentAd = ads[currentAdIndex];
    const rollDice = Math.random() * 100;
    const shouldDisplay = rollDice <= (currentAd.frequency ?? 20);

    setShowBillboard(shouldDisplay);
    const timing = currentAd.displayTime ? currentAd.displayTime : 5000;

    const rotationLoop = setTimeout(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ads.length);
    }, timing);

    return () => clearTimeout(rotationLoop);
  }, [ads, currentAdIndex]);

  function generateId(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `ad-${Date.now()}`;
  }

  function buildAdObject() {
    return {
      id: generateId(title || "ad"),
      title: title || "Untitled Ad",
      content: content || "",
      link: link || "",
      image: imageName ? `/assets/ads/${imageName}` : "",
      mediaType,
      displayTime: displayTime * 1000,
      frequency: frequency,
      placement,
      active,
    };
  }

  async function copyJSON() {
    try {
      await navigator.clipboard.writeText(JSON.stringify(buildAdObject(), null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  }

  const activeAd = ads[currentAdIndex];

  return (
    <>
      {/* Secret Trigger Button (Top Right View Layout) */}
      {showTriggerButton && (
        <div className="fixed right-6 top-24 z-50">
          <button
            onClick={() => {
              setShowTriggerButton(false);
              setMenuOpen(true);
            }}
            className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 border-2 border-white text-white font-black text-xl shadow-2xl flex items-center justify-center animate-bounce cursor-pointer pointer-events-auto"
          >
            A
          </button>
        </div>
      )}

      {/* Street Billboard Banner */}
      <div className={`fixed left-0 right-0 z-40 pointer-events-none p-4 flex justify-center ${activeAd?.placement === "top" ? "top-0" : "bottom-0"}`}>
        <AnimatePresence mode="wait">
          {showBillboard && activeAd && (
            <motion.div
              key={activeAd.id}
              initial={{ opacity: 0, rotateX: -90, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 90, y: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-4xl bg-zinc-950/95 border border-zinc-800 backdrop-blur-md rounded-xl p-3 shadow-2xl pointer-events-auto flex items-center justify-between gap-4 text-white overflow-hidden"
            >
              <div className="flex items-center gap-4 flex-1">
                {activeAd.image && (
                  <div className="w-14 h-14 rounded overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800">
                    {activeAd.mediaType === "video" ? (
                      <video src={activeAd.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    ) : (
                      <img src={activeAd.image} alt={activeAd.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-sm text-zinc-100">{activeAd.title}</h4>
                  <div className="text-xs text-zinc-400 mt-0.5" dangerouslySetInnerHTML={{ __html: activeAd.content }} />
                </div>
              </div>
              {activeAd.link && (
                <a href={activeAd.link} target="_blank" rel="noreferrer" className="bg-white hover:bg-zinc-200 text-black text-xs font-bold px-3 py-2 rounded-lg transition-colors flex-shrink-0">
                  Visit
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Creator Panel Dialog Context Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
          <div className="relative z-10 w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl text-zinc-100 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white">Oxagon Ad Creator</h3>
            <div className="mt-4 flex flex-col gap-3">
              <input className="p-2.5 rounded bg-zinc-800 border border-zinc-700 text-sm" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea rows={2} className="p-2.5 rounded bg-zinc-800 border border-zinc-700 text-sm resize-none" placeholder="Description (HTML allowed)" value={content} onChange={(e) => setContent(e.target.value)} />
              <div className="grid grid-cols-2 gap-3">
                <input className="p-2.5 rounded bg-zinc-800 border border-zinc-700 text-sm" placeholder="Link URL" value={link} onChange={(e) => setLink(e.target.value)} />
                <input className="p-2.5 rounded bg-zinc-800 border border-zinc-700 text-sm" placeholder="File name (e.g., banner.png)" value={imageName} onChange={(e) => imageName(e.target.value)} />
              </div>
              <div className="grid grid-cols-3 gap-3 bg-zinc-950/40 p-3 rounded-lg border border-zinc-800 text-xs">
                <div className="flex flex-col gap-1">
                  <label>Type</label>
                  <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="p-1.5 rounded bg-zinc-800 border border-zinc-700 text-white">
                    <option value="image">Photo</option>
                    <option value="gif">GIF</option>
                    <option value="video">Video (MP4)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label>Time (s)</label>
                  <input type="number" className="p-1 rounded bg-zinc-800 border border-zinc-700 text-white" value={displayTime} onChange={(e) => setDisplayTime(Number(e.target.value))} />
                </div>
                <div className="flex flex-col gap-1">
                  <label>Frequency (%)</label>
                  <input type="number" className="p-1 rounded bg-zinc-800 border border-zinc-700 text-white" value={frequency} onChange={(e) => setFrequency(Number(e.target.value))} />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button onClick={copyJSON} className="px-4 py-2 bg-white text-black font-bold text-xs rounded">Copy JSON</button>
                <button onClick={() => setMenuOpen(false)} className="px-4 py-2 bg-zinc-800 text-zinc-300 text-xs rounded border border-zinc-700">Close</button>
              </div>
              {copied && <div className="text-center text-xs text-green-400 mt-2">Copied! Paste into ads.json on GitHub.</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
