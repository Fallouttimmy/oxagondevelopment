import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const text = "a development team that creates everything";
  const words = text.split(" ");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <main className="z-10 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-tight"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-[0.3em] last:mr-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              setShowExplorer(true);
              setActiveCard(null);
            }}
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer w-64"
          >
            Explore
          </button>
          <Link
            to="/policies"
            className="px-8 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 transition-colors"
          >
            Policies
          </Link>
        </motion.div>
      </main>

      {/* Explorer modal */}
      {showExplorer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowExplorer(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative z-10 w-[92%] max-w-4xl bg-black/60 border border-white/10 rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Explore Oxagon Development</h2>
                <p className="text-sm text-gray-300 mt-1">Services, programs and creator tools we've built.</p>
              </div>
              <div className="ml-auto">
                <button
                  onClick={() => setShowExplorer(false)}
                  className="text-sm text-gray-300 hover:text-white"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* OSN Card */}
              <div
                className={`p-4 rounded-lg border border-white/6 bg-white/2 cursor-pointer transform transition-shadow ${
                  activeCard === "osn" ? "shadow-lg scale-[1.01] border-white/20" : "hover:shadow-md"
                }`}
                onClick={() => setActiveCard((c) => (c === "osn" ? null : "osn"))}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    OSN
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">OSN</h3>
                    <p className="text-xs text-gray-300">Oxagon Server Network</p>
                  </div>
                </div>
                <p className="text-sm text-gray-200 mt-3">
                  A service founded and run by Oxagon Development to help people manage servers and communities on platforms (mainly Discord). Includes user verification and bad-actor detection tooling.
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href="https://discord.gg/eNUVwVZAUb"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-md bg-white text-black text-sm"
                  >
                    Join Discord
                  </a>
                  <button
                    onClick={() => window.alert("OSN: more details coming soon.")}
                    className="px-3 py-1 rounded-md border border-white/10 text-sm text-gray-200"
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* Advertisement Program Card */}
              <div
                className={`p-4 rounded-lg border border-white/6 bg-white/2 cursor-pointer transform transition-shadow ${
                  activeCard === "advert" ? "shadow-lg scale-[1.01] border-white/20" : "hover:shadow-md"
                }`}
                onClick={() => setActiveCard((c) => (c === "advert" ? null : "advert"))}
              >
                <div className="flex items-center gap-3">
                  {/* Inline custom logo */}
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="6" fill="#ffffff" fillOpacity="0.06"/>
                      <path d="M7 12h3l2-3v6l2-3h3" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="6.5" cy="17.5" r="1.2" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Oxagon Advertisement Program</h3>
                    <p className="text-xs text-gray-300">Free, community-driven advertising across Oxagon services.</p>
                  </div>
                </div>

                {activeCard === "advert" ? (
                  <div className="mt-3 text-sm text-gray-200 text-left space-y-2">
                    <p className="font-semibold">Overview</p>
                    <p>
                      The Oxagon Development Advertisement Program is a free program that lets people advertise their projects via Oxagon Development and its services. It's community-driven and does not use paid ad channels.
                    </p>
                    <p className="mt-2 text-sm">
                      To start, first read the policies below:
                    </p>
                    <div className="mt-2 p-3 rounded-md bg-black/30 border border-white/6 text-xs text-gray-300">
                      <p className="font-medium">Some things you have to agree to:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Advertising will not be via paid channels like YouTube ads.</li>
                        <li>Oxagon Development can remove any ad that is too violent or possibly NSFW.</li>
                        <li>Joining the program does not give ownership of Oxagon Development.</li>
                        <li>Oxagon controls how and when ads are shown; you can request changes to your ad material.</li>
                        <li>We appreciate if the content credits Oxagon Development when possible.</li>
                      </ul>
                    </div>
                    <p className="mt-2">
                      Step 2 — contact us:
                      <br />
                      Discord: <a className="text-indigo-300" href="https://discord.gg/eNUVwVZAUb" target="_blank" rel="noreferrer">https://discord.gg/eNUVwVZAUb</a>
                      <br />
                      Email: <a className="text-indigo-300" href="mailto:oxagoncoredevelopment@gmail.com">oxagoncoredevelopment@gmail.com</a>
                    </p>
                    <p className="mt-2">Step 3 — enjoy the free advertising of your project.</p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-200 mt-3">
                    Free and community-run advertising. Click to read the program policies and contact steps.
                  </p>
                )}
              </div>

              {/* Creator Program Card */}
              <div
                className={`p-4 rounded-lg border border-white/6 bg-white/2 cursor-pointer transform transition-shadow ${
                  activeCard === "creator" ? "shadow-lg scale-[1.01] border-white/20" : "hover:shadow-md"
                }`}
                onClick={() => setActiveCard((c) => (c === "creator" ? null : "creator"))}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">C</div>
                  <div>
                    <h3 className="text-lg font-medium">Creator Program</h3>
                    <p className="text-xs text-gray-300">Tools & programs for creators</p>
                  </div>
                </div>

                <div className="mt-3 text-sm text-gray-200">
                  {activeCard === "creator" ? (
                    <p>This is sadly not yet finished. Come back another time and maybe somethings there :)</p>
                  ) : (
                    <p>Tools and programs for creators — coming soon. Click to view the current status.</p>
                  )}
                </div>
              </div>
            </div>

            {/* optional action row */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  if (activeCard === "advert") {
                    window.location.href = "mailto:oxagoncoredevelopment@gmail.com";
                  } else if (activeCard === "osn") {
                    window.open("https://discord.gg/eNUVwVZAUb", "_blank");
                  } else {
                    setActiveCard(null);
                  }
                }}
                className="px-4 py-2 rounded-md bg-white text-black text-sm"
              >
                {activeCard === "advert" ? "Contact (Email)" : activeCard === "osn" ? "Open Discord" : "Okay"}
              </button>
              <button
                onClick={() => {
                  setShowExplorer(false);
                  setActiveCard(null);
                }}
                className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
