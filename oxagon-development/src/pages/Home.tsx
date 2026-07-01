import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [stuffClicked, setStuffClicked] = useState(false);

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
            onClick={() => setStuffClicked(true)}
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer w-64"
          >
            {stuffClicked ? "Currently not available" : "Stuff we made"}
          </button>
          <Link
            to="/policies"
            className="px-8 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 transition-colors"
          >
            Policies
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
