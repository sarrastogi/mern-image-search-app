import React, { useState,useEffect,useContext } from "react";
import axios from "axios";
import ImageGrid from "./ImageGrid";
import  {AuthContext}  from "../Context/Authcontext";
import HistorySidebar from "./HistorySidebar";
export default function SearchPage() {
  const { user } = useContext(AuthContext);
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [lastTerm, setLastTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [topSearches, setTopSearches] = useState([]);

useEffect(() => {
  axios
    .get("/api/top-searches")
    .then((r) => setTopSearches(r.data))
    .catch(() => {});
}, []);

  //  Search Function
  async function doSearch(e) {
    e.preventDefault();
    if (!term) return;
    try {
      setLoading(true);
      const res = await axios.post("/api/search", { term });
      setImages(res.data.images || []);
      setLastTerm(term);
      setSelected(new Set());
    } catch(err){
      if(err.response && err.response.status === 401) alert('Please login to search');
      else console.error(err);
      }finally{ setLoading(false); }
  }

  //  Select / Unselect Image
  function toggleSelect(id) {
    const s = new Set(selected);
    if (s.has(id)) s.delete(id);
    else s.add(id);
    setSelected(s);
  }
//const user = null
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Image Search</h1>
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <div className="text-sm">{user.name}</div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    console.log("Logout clicked");
                    try {
                      await axios.post(
                        "/auth/logout",
                        {},
                        { withCredentials: true }
                      );
                      console.log("Logout success");
                      window.location.reload();
                    } catch (err) {
                      console.error("Logout failed:", err);
                    }
                  }}
                >
                  <button className="px-3 py-1 border rounded">Logout</button>
                </form>
              </>
            ) : (
              <div className="flex space-x-2">
                <a
                  href="/auth/google"
                  className="px-3 py-1 border
rounded"
                >
                  Sign in with Google
                </a>
                <a
                  href="/auth/github"
                  className="px-3 py-1 border
rounded"
                >
                  GitHub
                </a>
                <a
                  href="/auth/facebook"
                  className="px-3 py-1 border
rounded"
                >
                  Facebook
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 flex gap-6">
        <div className="flex-1">
          <div className="mb-4 p-3 bg-white rounded shadow flex gap-4 items-center">
            <strong>Top searches:</strong>
            {topSearches.map((t) => (
              <span key={t.term} className="px-2 py-1 bg-gray-100 rounded">
                {t.term} ({t.count})
              </span>
            ))}
          </div>

          <form onSubmit={doSearch} className="mb-4 flex gap-2">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search images..."
              className="flex-1 p-2 border rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>

          {lastTerm && (
            <div className="mb-2">
              You searched for <strong>{lastTerm}</strong> — {images.length}{" "}
              results.
            </div>
          )}

          <div className="mb-2">Selected: {selected.size} images</div>

          <ImageGrid
            images={images}
            selected={selected}
            toggleSelect={toggleSelect}
          />
        </div>

        <aside className="w-80">
          <HistorySidebar />
        </aside>
      </main>
    </div>
  );
}
