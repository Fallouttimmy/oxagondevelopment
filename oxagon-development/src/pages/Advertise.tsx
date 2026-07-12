import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Ad = {
  id: string;
  title: string;
  content: string;
  link?: string;
  image?: string;
  active?: boolean;
};

export default function Advertise() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    // fetch ads from public/ads.json so you can edit them directly in the repo (GitHub UI)
    fetch("/ads.json")
      .then((r) => r.ok ? r.json() : [])
      .then((data) => {
        if (Array.isArray(data)) setAds(data.filter((a) => a.active !== false));
      })
      .catch(() => setAds([]));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-20">
      <main className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          Oxagon Development Advertisement Program
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }} className="mt-4 text-gray-300">
          The Oxagon Development Advertisement Program is a free, community-driven service that lets people advertise their projects via Oxagon Development and its network of services. The program is free and built to make advertising accessible to creators and small teams.
        </motion.p>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="mt-6 p-4 rounded-md bg-white/3 border border-white/6 text-sm text-gray-200"
        >
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

        {/* Ads preview & instructions */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Current Ads on the Site</h2>
          <p className="text-sm text-gray-300 mt-2">Below are ads that are currently active on the site (pulled from <code>/ads.json</code>).</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {ads.length === 0 && (
              <div className="p-4 rounded-md bg-white/5 border border-white/6 text-gray-300">No active ads</div>
            )}

            {ads.map((ad) => (
              <div key={ad.id} className="p-4 rounded-md bg-white/5 border border-white/6">
                <div className="flex items-start gap-4">
                  {ad.image && (
                    <img src={ad.image} alt={ad.title} className="w-20 h-20 object-cover rounded" />
                  )}

                  <div>
                    <div className="font-semibold">{ad.title}</div>
                    <div className="text-sm text-gray-300 mt-1" dangerouslySetInnerHTML={{ __html: ad.content }} />
                    {ad.link && (
                      <a href={ad.link} target="_blank" rel="noreferrer" className="text-indigo-300 text-sm block mt-2">Visit</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-md bg-white/4 border border-white/6 text-sm text-gray-200">
            <h3 className="font-semibold">How to add or update ads (easy via GitHub)</h3>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
              <li>
                In the repository, open <code>/oxagon-development/ads.json</code> (or create it) — this file contains the list of ads shown on the site.
              </li>
              <li>
                Click the pencil (Edit) icon to update the JSON or add a new ad object. Each ad is a simple object with these fields:
                <pre className="mt-2 p-2 rounded bg-black/60 text-xs overflow-auto">{`{
  "id": "ad-1",
  "title": "My Project",
  "content": "<strong>Short blurb about the project</strong>",
  "link": "https://example.com",
  "image": "/path/to/image.png",
  "active": true
}`}</pre>
              </li>
              <li>Save the file and commit (enter a short commit message). GitHub (or your hosting service) will redeploy the site and the new ad will appear automatically.</li>
            </ol>

            <p className="mt-3 text-sm text-gray-300">If you prefer to add images, put them in <code>/oxagon-development/public/assets/ads/</code> and reference them with <code>"image": "/assets/ads/my-image.png"</code>.</p>
          </div>
        </section>

        <div className="mt-6 flex gap-3">
          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
