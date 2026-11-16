// Toate cererile HTTP stau aici; componentele nu apelează fetch direct.
// Resursa temei proprii este "piese".
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună: trimite JSON și aruncă eroare dacă răspunsul nu este 2xx
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  // 204 No Content nu are corp
  return res.status === 204 ? null : res.json();
}

export function fetchPiese() {
  return request("/piese");
}

export function fetchPiesa(id) {
  return request(`/piese/${id}`);
}

export function createPiesa(piesa) {
  return request("/piese", { method: "POST", body: JSON.stringify(piesa) });
}

export function updatePiesa(id, changes) {
  return request(`/piese/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deletePiesa(id) {
  return request(`/piese/${id}`, { method: "DELETE" });
}
