import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          background: "#1976d2",
          padding: "15px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
          }}
        >
          All Notifications
        </Link>

        <Link
          to="/priority"
          style={{
            color: "white",
          }}
        >
          Priority Notifications
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<AllNotifications />} />
        <Route
          path="/priority"
          element={<PriorityNotifications />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;