import { NavLink } from "react-router-dom";
import "./Header.scss";
import HamburgerButton from "../HamburgerButton";
import Socials from "../Socials";

function Header() {
  return (
    <header id="header">
      <div className="header gutters">
        <NavLink to="/" className="logo">
          <h1>Madeleine</h1>
        </NavLink>

        <Socials />

        <button
          className="mobile-nav"
          onClick={() => console.log("richard is sexy and has a juicy butt")}
        >
          <HamburgerButton />
        </button>
      </div>
    </header>
  );
}

export default Header;
