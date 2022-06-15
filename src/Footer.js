import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="shape-position gutters">
        <img src="../shape2.png" alt="shape2" />
        <img className="shape3" src="../shape3.png" alt="shape3" />
      </div>
      <section className="footer gutters">
        <div id="left">
          <h4>
            Madeleine Randall <span>-</span>
          </h4>
          <h4>Profolio Website 2: a demonstration of coding skills</h4>
          <h4>Code for the future ~</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            nostrum non ex fuga repudiandae vitae, quaerat obcaecati rem
            corporis qui quidem quae saepe, dolorem ullam veritatis blanditiis!
            Quos, alias expedita.
          </p>
          <nav>
            <a href="https://www.instagram.com/maddierandall/">
              <img src="../instagram-colour.png" alt="insta" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="../facebook-colour.png" alt="facebook" />
            </a>
            <a href="https://twitter.com/?lang=en">
              <img src="../twitter-colour.png" alt="twitter" />
            </a>
          </nav>
        </div>
        <div id="right">
          <h3>
            Stay in the loop <span>-</span>
          </h3>
          <p>Sign up for all your MDR news and updates.</p>
        </div>
      </section>
      <section className="copyright gutters">
        <div id="copyright">
          <ul>
            <li>Copyright © 2022, Madeleine Randall. All rights reserved.</li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Code of Conduct</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
