import "./Services.scss";
import { useState } from "react";

function Services() {
  const [clickMe, setClickMe] = useState(false);
  const [displayClicks, setDisplayClicks] = useState(0);

  function handleClickMe(e) {
    setClickMe(true);
    e.target.style.background = "red";
    console.log("The bastard clicked me!");
  }

  function handleDisplayClicks() {
    setDisplayClicks(displayClicks + 1);
    console.log("click on someone your own size");
  }

  const maddieObject = {
    foo: true, //boolean
    bjorn: "handsome", //string
    richard: 4, //number
    maddie: ["sexy", "butt"], //array
    manly: {
      // object (nested)
      home: true,
      beachDescription: "the best",
    },
  };

  function buttonBackground() {
    if (displayClicks === 0) {
      return undefined;
    } else if (displayClicks % 2 == 0) {
      return "pink";
    } else {
      return "skyblue";
    }
  }

  const [countThree, setCountThree] = useState(0);

  function handleClickThree() {
    setCountThree(countThree + 1);
    console.log("what the click");
  }

  function btnBackgroundColour() {
    if (countThree >= 10) {
      return "pink";
    } else {
      return undefined;
    }
  }

  const [countFour, setCountFour] = useState(0);

  function handleCountFour() {
    setCountFour(countFour + 1);
  }

  function reset() {
    setCountFour(0);
  }

  // function display() {
  //   return countFour > 0 ? "block" : "none";
  // }
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
          Create a button which displays the number of times it has been
          clicked.
        </h2>
        <p>
          When amount clicked is an even number make button pink, odd numbers
          are blue. When clicked logs to console "go click on someone your own
          size"
        </p>
        <button
          style={{
            backgroundColor: buttonBackground(),
          }}
          onClick={handleDisplayClicks}
        >
          Button cliked {displayClicks} of times
        </button>
      </div>

      <div className="services gutters">
        <h2>
          Create a button which displays the number of times it has been
          clicked.
        </h2>
        <p>
          When clicked, the text within button changes from "click me" to "click
          off", number of clicks is displayed underneath the button and "what
          the click" is logged to console. When number of clicks exceeds 10,
          background colour changes to pink.
        </p>
        <div className="btn-p">
          <button
            style={{ backgroundColor: btnBackgroundColour() }}
            onClick={handleClickThree}
          >
            {countThree ? "click off" : "click me"}
          </button>
          <p>You have clicked the button {countThree} times</p>
        </div>
      </div>

      <div className="services gutters">
        <h2>
          Make a button which displays the number of times it has been clicked.
        </h2>
        <p>
          When clicked, a second button appears which if clicked resets click
          counter on original button to zero.
        </p>
        {countFour > 0 ? (
          <button onClick={reset} style={{ maxWidth: "80px" }}>
            reset
          </button>
        ) : null}
        <button onClick={handleCountFour}>{countFour}</button>
      </div>
    </section>
  );
}

export default Services;
