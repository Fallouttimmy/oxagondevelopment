import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Advertise() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-20">
      <main className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-white/6 flex items-center justify-center">
            {/* Custom inline logo */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" fill="#111111" stroke="#ffffff" strokeOpacity="0.06" />
              <path d="M6 13h3l2-3v6l2-3h3" stroke="#ffffff" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold">Oxagon Development Advertisement Program</h1>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }} className="mt-4 text-gray-300">
          The Oxagon Development Advertisement Program is a free, community-driven service that lets people advertise their projects via Oxagon Development and its network of services. The program is free and built to make advertising accessible to creators and small teams.
        </motion.p>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-6 p-4 rounded-md bg-white/3 border border-white/6 text-sm text-gray-200">
          <p className="font-semibold">Some things you have to agree to</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Advertising will not be via paid channels like YouTube ads.</li>
            <li>Oxagon Development may remove any ad that is too violent or potentially NSFW.</li>
            <li>Joining the program does not grant ownership or control of Oxagon Development.</li>
            <li>Oxagon controls how and when ads are shown; you may request changes to your ad material.</li>
            <li>We appreciate if the content credits Oxagon Development when possible.</li>
          </ul>
        </motion.section>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-6 text-sm text-gray-300">
          <p>Step 2 — contact us:</p>
          <p>
            Discord: <a className="text-indigo-300" href="https://discord.gg/eNUVwVZAUb" target="_blank" rel="noreferrer">https://discord.gg/eNUVwVZAUb</a>
            <br />
            Email: <a className="text-indigo-300" href="mailto:oxagoncoredevelopment@gmail.com">oxagoncoredevelopment@gmail.com</a>
          </p>

          <p className="mt-4">Step 3 — enjoy the free advertising of your project.</p>
        </motion.div>

        <div className="mt-6 flex gap-3">
          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
