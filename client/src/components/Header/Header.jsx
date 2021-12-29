import { Link } from "react-router-dom";

export function Header() {
  return (
    <div style={{ backgroundColor: "#353432" }}>
      <h1 style={{ color: "#fff" }}>Dogs</h1>
      <Link to="/">Return to landing page</Link>
    </div>
  );
}

export default Header;
