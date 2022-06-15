import "./Header.scss";

function Header() {
  return (
    <header id="header">
      <div className="header gutters">
        <div className="logo">
          <h1>Madeleine</h1>
        </div>
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
      </div>
    </header>
  );
}

export default Header;
