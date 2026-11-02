// Toate cererile HTTP stau aici; componentele nu apelează fetch direct.
// Resursa temei proprii este "piese".
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchPiese() {
  const res = await fetch(`${API_URL}/piese`);
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.json();
}

