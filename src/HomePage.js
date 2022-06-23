import "./HomePage.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  return (
    <main>
      <section className="s1 gutters">
        <div>
          <img src="../heart.png" alt="heart" />
        </div>
        <div>
          <h1>Maddie's work examples</h1>
        </div>
      </section>
      <section className="s2 gutters">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aliquid in ratione accusamus aperiam omnis eum dolorem! Cumque
            delectus fugiat natus vitae nesciunt minus molestiae aliquid ipsa
            minima. Quae, excepturi? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quos ad hic porro quisquam, aspernatur aut
            necessitatibus quae at dignissimos delectus consequatur quam cumque
            alias facere maiores sed. Sequi, placeat obcaecati.
          </p>
          <img id="shape1" src="../shape1.png" alt="shape1" />
        </div>
        <div>
          <NavLink to="/Example1">JavaScript Event Handler Examples</NavLink>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
