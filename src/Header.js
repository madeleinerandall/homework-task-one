import "./Header.scss";

function Header() {
  return (
    <header id="header">
      <div className="header gutters">
        <div className="logo">
          <h1>Madeleine</h1>
        </div>
        <div className="socials">
          <img src="../instagram.png" alt="insta" />
          <img src="../facebook.png" alt="facebook" />
          <img src="../twitter.png" alt="twitter" />
        </div>
      </div>
    </header>
  );
}

export default Header;
