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
        <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold">
          Oxagon Development Advertisement Program
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }} className="mt-4 text-gray-300">
          The Oxagon Development Advertisement Program is a free, community-driven service that lets creators advertise their projects via the Oxagon network.
        </motion.p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Current Ads on the Site</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {ads.length === 0 && <div className="p-4 rounded-md bg-white/5 border border-white/6 text-gray-300">No active ads right now</div>}
            {ads.map((ad) => (
              <div key={ad.id} className="p-4 rounded-md bg-white/5 border border-white/6">
                <div className="flex items-start gap-4">
                  {ad.image && <img src={ad.image} alt={ad.title} className="w-20 h-20 object-cover rounded" />}
                  <div>
                    <div className="font-semibold">{ad.title}</div>
                    <div className="text-sm text-gray-300 mt-1" dangerouslySetInnerHTML={{ __html: ad.content }} />
                    {ad.link && <a href={ad.link} target="_blank" rel="noreferrer" className="text-indigo-300 text-sm block mt-2">Visit</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-md bg-white/4 border border-white/6 text-sm text-gray-200">
            <h3 className="font-semibold">How to update ads via GitHub</h3>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
              <li>Open <code>/public/ads.json</code> inside the repository codebase layout.</li>
              <li>
                Paste your generated items matching this structure array sequence syntax block exactly:
                <pre className="mt-2 p-2 rounded bg-black/60 text-xs overflow-auto">{`{
  "id": "ad-1",
  "title": "My Project",
  "content": "<strong>Short description here</strong>",
  "link": "https://example.com",
  "image": "/assets/ads/banner.png",
  "mediaType": "image",
  "displayTime": 5000,
  "frequency": 20,
  "placement": "bottom",
  "active": true
}`}</pre>
              </li>
            </ol>
          </div>
        </section>

        <div className="mt-6">
          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
