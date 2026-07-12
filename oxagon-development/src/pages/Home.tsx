import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  const text = "a development team that creates everything";
  const words = text.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <main className="z-10 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/osn"
            className="block p-4 rounded-lg bg-white/6 border border-white/8 hover:bg-white/10 transition-colors text-left"
          >
            <div className="text-lg font-medium">OSN</div>
            <div className="text-sm text-gray-300 mt-1">Oxagon Server Network — manage servers & communities (mainly Discord)</div>
          </Link>

          <Link
            to="/advertise"
            className="block p-4 rounded-lg bg-white/6 border border-white/8 hover:bg-white/10 transition-colors text-left"
          >
            <div className="text-lg font-medium">Oxagon Advertisement Program</div>
            <div className="text-sm text-gray-300 mt-1">Free, community-driven advertising across Oxagon services</div>
          </Link>

          <Link
            to="/creator"
            className="block p-4 rounded-lg bg-white/6 border border-white/8 hover:bg-white/10 transition-colors text-left"
          >
            <div className="text-lg font-medium">Creator Program</div>
            <div className="text-sm text-gray-300 mt-1">Tools & programs for creators — coming soon</div>
          </Link>
        </div>

        <div className="mt-6">
          <Link
            to="/policies"
            className="px-6 py-2 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 transition-colors"
          >
            Policies
          </Link>
        </div>
      </main>
    </div>
  );
}
