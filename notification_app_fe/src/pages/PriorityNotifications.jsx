import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getNotifications();

    const priorityOrder = {
      Placement: 3,
      Result: 2,
      Event: 1,
    };

    const sorted = [...data]
      .sort((a, b) => {
        return (
          priorityOrder[b.Type] -
          priorityOrder[a.Type]
        );
      })
      .slice(0, 10);

    setNotifications(sorted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid green",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <p>{item.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default PriorityNotifications;