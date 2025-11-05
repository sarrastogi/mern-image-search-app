import React, { useEffect, useState } from "react";
import axios from "axios";

function HistorySidebar() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    axios
      .get("/api/history", { withCredentials: true })
      .then((r) => setHistory(r.data))
      .catch(() => setHistory([]));
  }, []);
  return (
    <div className="p-3 bg-white rounded shadow">
      <h3 className="font-bold mb-2">Your Search History</h3>
      {history.length === 0 && (
        <div className="text-sm text-gray-500">
          No recent searches or not logged in.
        </div>
      )}
      <ul className="space-y-2 text-sm">
        {history.map((h) => (
          <li key={h._id} className="border p-2 rounded">
            <div className="font-medium">{h.term}</div>
            <div className="text-xs text-gray-500">
              {new Date(h.timestamp).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HistorySidebar