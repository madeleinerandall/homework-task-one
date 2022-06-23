import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <nav className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/example1">JavaScript 1</Link>
      <Link to="/example1">JavaScript 2</Link>
      <Link to="/example1">JavaScript 3</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default MobileNav;
