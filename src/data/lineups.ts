import raw from "./lineups.json";
import type { MapSlug } from "./mapPool";

export type LineupType = "smoke";
export type Side = "T" | "CT";

export type Lineup = {
  id: string;
  map: MapSlug;
  type: LineupType;
  side: Side;
  title: string;
  from: string;
  to: string;
  tick: 64 | 128;
  steps: string[];
  source: { name: string; url: string };
};

export const lineups: Lineup[] = raw as Lineup[];

export function getLineupsByMap(map: MapSlug): Lineup[] {
  return lineups.filter((l) => l.map === map);
}
