import * as React from "react";
import { DNA } from "react-loader-spinner";
import Loader from "react-loaders";
import { useDispatch, useSelector } from "react-redux";
import { jeremyCodeSubmitted } from "../../actions/jeremy.actions";
import { getIsJeremyCodeSubmitted } from "../../selectors/jeremy.selectors";

const subjects = [
  "CREATIVE DIRECTION & DEVELOPMENT",
  "FILM & VIDEO PRODUCTION",
  "VISUAL EFFECTS & MOTION DESIGN",
  "ART DEPARTMENT & PROP FABRICATION",
  "EDITING & POST-PRODUCTION",
];

const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasSent, setHasSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState<string | undefined>("default");
  const dispatch = useDispatch();
  const isCodeSubmitted = useSelector(getIsJeremyCodeSubmitted);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!name || !email || !message || subject === "default") {
      return;
    }
    setIsLoading(true);
    fetch(
      "https://us-central1-aurora-vision-a8244.cloudfunctions.net/sendContactEmail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          subject,
        }),
      }
    )
      .then((res) => {
        return res.text();
      })
      .then((msg) => {
        if (msg === "JEREMY MODE") {
          dispatch(jeremyCodeSubmitted());
        }
        setIsLoading(false);
        setHasSent(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  if (hasSent && isCodeSubmitted) {
    return (
      <div className="contact-form__confirmation">
        <div className="contact-us-grid__title">JEREMY MODE!</div>
        <p className="contact-us-grid__paragraph">
          Thanks for going absolutely Jeremy mode.
        </p>
      </div>
    );
  }

  if (hasSent) {
    return (
      <div className="contact-form__confirmation">
        <div className="contact-us-grid__title">MESSAGE SENT!</div>
        <p className="contact-us-grid__paragraph">
          We'll get back to you ASAP.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__input-row">
        <input
          className="contact-form__text-input"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="NAME..."
        />
        <input
          className="contact-form__text-input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="EMAIL..."
        />
      </div>
      <select
        className="contact-form__select-box"
        name="subject"
        placeholder="SUBJECT/SERVICE..."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option disabled value={"default"}>
          SUBJECT/SERVICE...
        </option>
        {subjects.map((subject) => (
          <option value={subject} key={subject}>
            {subject}
          </option>
        ))}
      </select>
      <textarea
        className="contact-form__textarea"
        name="message"
        placeholder="YOUR MESSAGE..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="button" type="submit">
        {isLoading ? (
          <DNA
            visible={true}
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper button__loader"
          />
        ) : (
          "SUBMIT"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
