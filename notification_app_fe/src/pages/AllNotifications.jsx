import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getNotifications();

      console.log("Notifications received:", data);

      setNotifications(data);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.Type === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      <br />
      <br />

      {loading && <p>Loading notifications...</p>}

      {!loading && filtered.length === 0 && (
        <p>No notifications found.</p>
      )}

      {!loading &&
        filtered.map((item) => (
          <div
            key={item.ID}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{item.Type}</h3>
            <p>
              <strong>Message:</strong> {item.Message}
            </p>
            <p>
              <strong>Time:</strong> {item.Timestamp}
            </p>
          </div>
        ))}
    </div>
  );
}

export default AllNotifications;