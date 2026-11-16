// Valorile fixe și etichetele lor, într-un singur loc.
export const TIPURI = [
  { value: "motor", label: "Motor" },
  { value: "franare", label: "Frânare" },
  { value: "suspensie", label: "Suspensie" },
  { value: "caroserie", label: "Caroserie" },
];

export const ETICHETE_TIP = Object.fromEntries(
  TIPURI.map((p) => [p.value, p.label])
);
