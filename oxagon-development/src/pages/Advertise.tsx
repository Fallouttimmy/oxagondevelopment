import { Link } from "react-router-dom";

export default function Advertise() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Oxagon Development Advertisement Program</h1>

        <p className="mt-4 text-gray-300">
          The Oxagon Development Advertisement Program is a free, community-driven program that allows people to advertise their projects via Oxagon Development and its services. Advertising will not be done using paid channels.
        </p>

        <section className="mt-6 p-4 rounded-md bg-white/3 border border-white/6 text-sm text-gray-200">
          <p className="font-semibold">Some things you have to agree to</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Advertising will not be via paid channels like YouTube ads.</li>
            <li>Oxagon Development can remove any ad that is too violent or possibly NSFW.</li>
            <li>Joining the program does not give ownership of Oxagon Development.</li>
            <li>Oxagon controls how and when ads are shown; you can request changes to your ad material.</li>
            <li>We appreciate if the content credits Oxagon Development when possible.</li>
          </ul>
        </section>

        <div className="mt-6 text-sm text-gray-300">
          <p>Step 2 — contact us:</p>
          <p>
            Discord: <a className="text-indigo-300" href="https://discord.gg/eNUVwVZAUb" target="_blank" rel="noreferrer">https://discord.gg/eNUVwVZAUb</a>
            <br />
            Email: <a className="text-indigo-300" href="mailto:oxagoncoredevelopment@gmail.com">oxagoncoredevelopment@gmail.com</a>
          </p>

          <p className="mt-4">Step 3 — enjoy the free advertising of your project.</p>
        </div>

        <div className="mt-6 flex gap-3">
          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
