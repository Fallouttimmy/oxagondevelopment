/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const messages = [
    "It can take up to 3 days until the site comes back online.",
    "The current site that you are on is: oxagondevelopment.vercel.app",
    "the reason for the maintenance is: site overhaul.",
    "Try refreshing the page once in a while.",
    "The site overhaul will fix 41 bugs."
  ];

  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Interval to smoothly auto-cycle the focus text block (only when not expanded)
  useEffect(() => {
    if (isExpanded) return;
    
    const timer = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [messages.length, isExpanded]);

  return (
    <div 
      id="maintenance-page" 
      className="min-h-screen w-full bg-orange-500 flex flex-col items-center justify-center p-6 md:p-12 text-black selection:bg-black selection:text-orange-500 font-sans relative overflow-hidden"
    >
      <div className="w-full max-w-3xl flex flex-col items-center text-center">
        {/* Main maintenance message */}
        <motion.h1 
          id="maintenance-message"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-none mb-10 cursor-default select-none"
        >
          site is temporarilly closed due to scheduled maintenance.
        </motion.h1>

        {/* Central interactive sliding/fading information switcher with Smooth Shared Layout ID Animation */}
        <AnimatePresence mode="sync">
          {!isExpanded ? (
            <motion.div 
              layoutId="card-container"
              id="scroll-card"
              onClick={() => setIsExpanded(true)}
              title="Click to view all information"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring", damping: 22, stiffness: 140 }}
              whileHover={{ 
                scale: 1.02, 
                rotateZ: 0.5,
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-xl bg-black text-orange-500 p-6 md:p-8 rounded-2xl border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 cursor-pointer select-none"
            >
              {/* Header Row */}
              <motion.div layoutId="header-row" className="flex items-center justify-between mb-4 border-b border-orange-500/25 pb-3">
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-orange-400">
                  <Info className="w-4 h-4 animate-pulse" />
                  extra information
                </span>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider opacity-75">
                  click card to expand
                </span>
              </motion.div>

              {/* Card Message Body */}
              <motion.div layoutId="body-content" className="min-h-[85px] flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={activeMessageIndex}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="text-lg md:text-xl font-medium tracking-tight leading-relaxed text-left"
                  >
                    {messages[activeMessageIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Slider Indicators inside bottom row */}
              <motion.div 
                layoutId="footer-row"
                className="flex items-center justify-between mt-4 pt-2 border-t border-orange-500/10"
              >
                <div 
                  className="flex gap-2"
                  onClick={(e) => {
                    // Prevent card click expansion when click is hitting the navigation dots directly
                    e.stopPropagation();
                  }}
                >
                  {messages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMessageIndex(idx)}
                      className={`w-9 h-2.5 rounded-full border border-orange-500/50 transition-all cursor-pointer ${
                        activeMessageIndex === idx 
                          ? "bg-orange-500 scale-x-110" 
                          : "bg-transparent hover:bg-orange-500/25"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-orange-400/80 uppercase font-bold">
                  {activeMessageIndex + 1} / {messages.length}
                </span>
              </motion.div>
            </motion.div>
          ) : (
            /* Smooth Overlay Fullscreen Container */
            <motion.div 
              layoutId="card-container"
              id="expanded-card"
              onClick={() => setIsExpanded(false)}
              title="Click anywhere to close full view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 120 }}
              className="fixed inset-0 z-50 bg-black text-orange-500 p-8 md:p-16 flex flex-col justify-between cursor-pointer select-none overflow-y-auto"
            >
              {/* Header Row */}
              <motion.div layoutId="header-row" className="flex items-center justify-between border-b border-orange-500/25 pb-4 max-w-4xl w-full mx-auto">
                <span className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest font-bold text-orange-400">
                  <Info className="w-5 h-5 animate-pulse" />
                  extra information
                </span>
                <span className="font-mono text-xs uppercase font-bold tracking-wider opacity-75 bg-orange-500/10 px-3 py-1 rounded-full">
                  click anywhere to close
                </span>
              </motion.div>

              {/* Full list of all messages beautifully formatted with individual staggering */}
              <motion.div layoutId="body-content" className="flex-grow flex flex-col justify-center max-w-4xl w-full mx-auto my-8">
                <div className="space-y-6 md:space-y-10 py-4">
                  {messages.map((msg, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex gap-4 md:gap-6 items-start border-l-4 border-orange-500 pl-4 md:pl-6 text-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 + 0.1, duration: 0.4, ease: "easeOut" }}
                    >
                      <span className="font-mono text-base md:text-xl text-orange-400 font-extrabold mt-1">
                        / 0{idx + 1}
                      </span>
                      <p className="text-xl md:text-3xl lg:text-3xl font-semibold tracking-tight leading-relaxed text-orange-100">
                        {msg}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Simple Footer with Copyright text only on bottom left (system overhaul text completely deleted from bottom right) */}
              <motion.div 
                layoutId="footer-row"
                className="flex items-center justify-between border-t border-orange-500/10 pt-4 max-w-4xl w-full mx-auto text-xs text-orange-400 font-mono"
              >
                <span>© {new Date().getFullYear()} Oxagon Development</span>
                <span className="opacity-0">removed</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

