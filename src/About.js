import "./About.scss";
import { useState } from "react";

function About() {
  const [clickCount, setClickCount] = useState(0);

  function handleClickCount() {
    setClickCount(clickCount + 1);
    console.log("Richards birthday is today!");
  }

  function reset() {
    setClickCount(0);
  }

  function btnBackgroundColour() {
    if (clickCount >= 6) {
      return "pink";
    } else {
      return "skyblue";
    }
  }

  return (
    <section>
      <div className="gutters">
        <h1>I love Richard</h1>
        <button
          onClick={handleClickCount}
          style={{ backgroundColor: btnBackgroundColour() }}
        >
          {clickCount}
        </button>
        {clickCount > 0 ? <button onClick={reset}>reset</button> : null}
      </div>
    </section>
  );
}

export default About;
