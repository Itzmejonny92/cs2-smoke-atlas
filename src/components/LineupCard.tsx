import type { Lineup } from "@/data/lineups";

export function LineupCard({ lineup }: { lineup: Lineup }) {
  return (
    <div className="rounded-2xl border p-4 space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">{lineup.title}</div>
          <div className="text-sm text-gray-600">
            {lineup.side} • {lineup.from} → {lineup.to} • {lineup.tick}-tick
          </div>
        </div>
        <span className="text-xs rounded-full border px-2 py-1">Smoke</span>
      </div>

      <ol className="list-decimal pl-5 space-y-1">
        {lineup.steps.map((s, i) => (
          <li key={i} className="text-sm">{s}</li>
        ))}
      </ol>

      <div className="text-sm">
        <span className="text-gray-600">Credit: </span>
        <a
          href={lineup.source.url}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {lineup.source.name}
        </a>
      </div>
    </div>
  );
}
