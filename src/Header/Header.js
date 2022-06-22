import { NavLink } from "react-router-dom";
import "./Header.scss";
import MobileNavButton from "./MobileNavButton";

function Header() {
  return (
    <header id="header">
      <div className="header gutters">
        <NavLink to="/" className="logo">
          <h1>Madeleine</h1>
        </NavLink>

        <div className="socials">
          <a href="https://www.instagram.com/maddierandall/">
            <img src="../instagram.png" alt="insta" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="../facebook.png" alt="facebook" />
          </a>

          <a href="https://twitter.com/?lang=en">
            <img src="../twitter.png" alt="twitter" />
          </a>
        </div>

        <button
          className="mobile-nav"
          onClick={() => console.log("richard is sexy and has a juicy butt")}
        >
          <MobileNavButton />
        </button>
      </div>
    </header>
  );
}

export default Header;
