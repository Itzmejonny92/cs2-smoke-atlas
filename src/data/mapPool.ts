export type MapSlug =
  | "dust2"
  | "mirage"
  | "inferno"
  | "nuke"
  | "ancient"
  | "overpass"
  | "anubis";

export const MAPS: { slug: MapSlug; name: string }[] = [
  { slug: "dust2", name: "Dust2" },
  { slug: "mirage", name: "Mirage" },
  { slug: "inferno", name: "Inferno" },
  { slug: "nuke", name: "Nuke" },
  { slug: "ancient", name: "Ancient" },
  { slug: "overpass", name: "Overpass" },
  { slug: "anubis", name: "Anubis" }
];
