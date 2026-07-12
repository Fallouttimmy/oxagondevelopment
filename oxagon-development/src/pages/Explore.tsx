import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Explore — Oxagon Development</h1>
        <p className="mt-2 text-gray-300">Services and programs provided by Oxagon Development.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/osn"
            className="block p-4 rounded-lg bg-white/6 border border-white/8 hover:bg-white/10 transition-colors text-left"
          >
            <div className="text-lg font-medium">OSN</div>
            <div className="text-sm text-gray-300 mt-1">About the Oxagon Server Network — manage servers & communities</div>
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
          <Link to="/" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
