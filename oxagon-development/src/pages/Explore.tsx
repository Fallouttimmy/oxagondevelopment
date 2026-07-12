import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 pt-20">
      <main className="w-full max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
          Explore — Oxagon Development
        </h1>
        <p className="mt-3 text-gray-300">Services and programs provided by Oxagon Development.</p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <Link
                to="/osn"
                className="block p-6 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition-colors text-left h-full"
              >
                <div className="text-lg font-semibold">OSN</div>
                <div className="text-xs text-gray-300 mt-2">
                  Oxagon Server Network — manage servers & communities (mainly Discord)
                </div>
                <div className="mt-4 text-sm text-gray-200">
                  User verification, moderation tooling, and assistance setting up communities.
                </div>
              </Link>

              <Link
                to="/advertise"
                className="block p-6 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition-colors text-left h-full"
              >
                <div className="text-lg font-semibold">Oxagon Advertisement Program</div>
                <div className="text-xs text-gray-300 mt-2">
                  Free, community-driven advertising across Oxagon services
                </div>
                <div className="mt-4 text-sm text-gray-200">
                  Read the program policies and contact instructions to get started.
                </div>
              </Link>

              <Link
                to="/creator"
                className="block p-6 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition-colors text-left h-full"
              >
                <div className="text-lg font-semibold">Creator Program</div>
                <div className="text-xs text-gray-300 mt-2">Tools & programs for creators — coming soon</div>
                <div className="mt-4 text-sm text-gray-200">This area will host creator tools and resources.</div>
              </Link>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                to="/"
                className="px-4 py-2 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 transition-colors"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
