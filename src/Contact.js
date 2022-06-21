import "./Contact.scss";

function Contact() {
  var count = 0;

  function btn(e) {
    e.count++;
    console.log("click on someone your own size");
    e.target.style.background = "pink";
  }

  return (
    <section>
      <div className="contact gutters">
        <button onClick={btn}>
          <p>
            Button clicked <span>{count()}</span> times
          </p>
        </button>
      </div>
    </section>
  );
}

export default Contact;
