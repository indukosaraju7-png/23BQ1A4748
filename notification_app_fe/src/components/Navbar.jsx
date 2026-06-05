import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#1976d2",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "20px",
          textDecoration: "none",
        }}
      >
        All Notifications
      </Link>

      <Link
        to="/priority"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Priority Notifications
      </Link>
    </nav>
  );
}

export default Navbar;