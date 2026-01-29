import Link from "next/link";

export function MapCard({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      href={`/maps/${slug}`}
      className="block rounded-2xl border p-4 hover:bg-gray-50 transition"
    >
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-600">Visa smoke lineups</div>
    </Link>
  );
}
