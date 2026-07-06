import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <span className="brand-mark">S</span>
        <span>StayFinder</span>
      </Link>
      <nav>
        <Link to="/">Hotels</Link>
      </nav>
    </header>
  );
}

export default Navbar;
