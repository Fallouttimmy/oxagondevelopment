import { Link } from "react-router-dom";

export default function Creator() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Creator Program</h1>

        <p className="mt-4 text-gray-300">
          This area will host tools and programs for creators. For now:
        </p>

        <div className="mt-6 p-4 rounded-md bg-white/3 border border-white/6 text-sm text-gray-200">
          This is sadly not yet finished. Come back another time and maybe somethings there :)
        </div>

        <div className="mt-6 flex gap-3">
          <Link to="/explore" className="px-4 py-2 rounded-md border border-white/10 text-sm text-gray-200">Back</Link>
        </div>
      </main>
    </div>
  );
}
