import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function Home() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data = await getNotifications();

    if (data.notifications) {
      setNotifications(data.notifications);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default Home;