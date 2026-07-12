import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Creator() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-20">
      <main className="max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold">
          Creator Program
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }} className="mt-4 text-gray-300">
          This section will host tools and programs for creators. For now, here's the current status:
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-6 p-4 rounded-md bg-white/3 border border-white/6 text-sm text-gray-200">
          This is sadly not yet finished. Come back another time — maybe something's there :) 
        </motion.div>

        <div className="mt-6 flex gap-3">
          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
