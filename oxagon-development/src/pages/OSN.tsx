import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function OSN() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-20">
      <main className="max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold">
          OSN — Oxagon Server Network
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 text-gray-300">
          OSN is a service founded and operated by Oxagon Development. This service helps people manage servers and communities across a variety of social platforms (primarily Discord). It also includes features like user verification and bad-actor detection tooling.
        </motion.p>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 space-y-3 text-gray-200">
          <h2 className="text-xl font-semibold">Why OSN exists</h2>
          <p>
            OSN was created because many people want to run servers and communities but lack the resources or experience to do so. We provide help with setup, moderation systems, and security tooling so communities can run safely and effectively.
          </p>

          <h3 className="text-lg font-semibold mt-2">What OSN offers</h3>
          <ul className="list-disc pl-5">
            <li>User verification and account linking tools</li>
            <li>Moderation and bad-actor detection assistance</li>
            <li>Assistance and setup for communities that lack resources or know-how</li>
          </ul>
        </motion.section>

        <div className="mt-6 flex gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            className="px-4 py-2 rounded-md bg-white text-black inline-block"
            href="https://discord.gg/eNUVwVZAUb"
            target="_blank"
            rel="noreferrer"
          >
            Join Discord
          </motion.a>

          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
