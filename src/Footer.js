import "./Footer.scss";

function Footer() {
  return (
    <footer>
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
          <nav></nav>
        </div>
        <div id="right">
          <h4>right hand side (for now)</h4>
        </div>
      </section>
      <section className="copyright gutters">
        <div id="copyright">
          <p>Copyright Madeleine Randall 2022</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
