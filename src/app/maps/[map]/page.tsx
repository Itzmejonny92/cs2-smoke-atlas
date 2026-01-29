import { MAPS, type MapSlug } from "@/data/mapPool";
import { getLineupsByMap } from "@/data/lineups";
import { LineupCard } from "@/components/LineupCard";
import Link from "next/link";
import { notFound } from "next/navigation";

function isMapSlug(x: string): x is MapSlug {
  return MAPS.some((m) => m.slug === x);
}

type PageProps = {
  params: Promise<{ map: string }>;
};

export default async function MapPage({ params }: PageProps) {
  const { map } = await params; // ✅ Next 16: params är Promise
  const slug = map.toLowerCase();

  if (!isMapSlug(slug)) return notFound();

  const mapMeta = MAPS.find((m) => m.slug === slug)!;
  const lineups = getLineupsByMap(slug);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="space-y-2">
        <Link href="/" className="underline text-sm">
          ← Tillbaka
        </Link>

        <h1 className="text-3xl font-bold">{mapMeta.name}</h1>

        <p className="text-gray-600">{lineups.length} lineup(s) hittade.</p>
      </header>

      {lineups.length === 0 ? (
        <div className="rounded-2xl border p-6 text-gray-700">
          Inga lineups än. Lägg till i <code>src/data/lineups.json</code>.
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-4">
          {lineups.map((l) => (
            <LineupCard key={l.id} lineup={l} />
          ))}
        </section>
      )}
    </main>
  );
}
