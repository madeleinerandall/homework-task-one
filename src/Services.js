import "./Services.scss";
import { useState } from "react";

function Services() {
  const [clickMe, setClickMe] = useState(false);
  const [displayClicks, setDisplayClicks] = useState(false);

  function handleClickMe(e) {
    setClickMe(true);
    e.target.style.background = "red";
    console.log("The bastard clicked me!");
  }

  function handleDisplayClicks(e) {
    setDisplayClicks(!displayClicks);
    e.target.style.background = "pink";
    console.log("click on someone your own size");
  }

  return (
    <section>
      <div className="services gutters">
        <h2>Create button when clicked turns red and text says "clicked!"</h2>
        <p>
          Any clicks after this there are no changes. Every click logs to
          console "The bastard clicked me!"
        </p>
        <button onClick={handleClickMe}>
          {clickMe ? "clicked!" : "unclicked"}
        </button>
      </div>

      <div className="services gutters">
        <h2>
          Make a button which displays the number of times it has been clicked.
        </h2>
        <p>
          When amount clicked is an even number make button pink, odd numbers
          are blue. When clicked logs to console "go click on someone your own
          size"
        </p>
        <button onClick={handleDisplayClicks}>
          Button cliked {displayClicks} of times
        </button>
      </div>

      <div className="services gutters">
        <h2>
          Make a button which displays the number of times it has been clicked.
        </h2>
        <p>
          When clicked, a second button appears which if clicked resets click
          counter on original button to zero.
        </p>
        <button onClick={handleClickMe}>
          {clickMe ? "clicked!" : "unclicked"}
        </button>
      </div>
    </section>
  );
}

export default Services;
