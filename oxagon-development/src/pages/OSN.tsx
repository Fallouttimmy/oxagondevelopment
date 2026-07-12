import { Link } from "react-router-dom";

export default function OSN() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">OSN — Oxagon Server Network</h1>
        <p className="mt-4 text-gray-300">
          OSN is a service founded and run by Oxagon Development to help people manage servers and communities across many platforms (mainly Discord). It provides user verification, community moderation tooling, and bad-actor detection software.
        </p>

        <section className="mt-6 space-y-3 text-gray-200">
          <h2 className="text-xl font-semibold">What OSN offers</h2>
          <ul className="list-disc pl-5">
            <li>User verification and account linking tools</li>
            <li>Moderation and bad-actor detection assistance</li>
            <li>Assistance and setup for communities that lack resources or know-how</li>
          </ul>
        </section>

        <div className="mt-6 flex gap-3">
          <a href="https://discord.gg/eNUVwVZAUb" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white text-black">
            Join Discord
          </a>
          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
