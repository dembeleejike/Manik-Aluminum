// Central place the site talks to the backend from. Swap VITE_API_URL in
// .env to point at your deployed backend once it's live.
// Strip any trailing slash so it doesn't matter whether VITE_API_URL was
// set with or without one — this can never cause a "//api/..." 404 again.
const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/+$/, "");
 
async function get(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}
 
export const api = {
  getProducts: () => get("/api/products"),
  getCategories: () => get("/api/categories"),
  getProjects: () => get("/api/projects"),
 
  submitQuote: async (payload) => {
    const res = await fetch(`${API_URL}/api/quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Failed to send quote request");
    return data;
  },
};
 