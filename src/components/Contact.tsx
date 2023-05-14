import "../scss/Contact.scss";
import { SyntheticEvent, useState, useRef } from "react";
import { Icon } from "@mdi/react";
import emailjs from "@emailjs/browser";
import {
  mdiCellphone,
  mdiEmail,
  mdiFacebook,
  mdiGithub,
  mdiLinkedin,
  mdiMapMarker,
} from "@mdi/js";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);
  const nameInput = useRef<HTMLInputElement | null>(null);

  function isValidEmail(email: string) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsClicked(true);
    const currentForm = form.current;

    if (currentForm?.checkValidity()) {
      emailjs
        .sendForm(
          "service_2hem1gc",
          "template_t0md5ms",
          currentForm,
          "-FWZuVUaVg83yduBr"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setMessageSent(true);
      setIsClicked(false);
      form?.current?.reset();
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setMessageSent(false);
    }
  }

  return (
    <>
      <h1 id="contact">CONTACT ME</h1>
      <section className="contact-container">
        <form ref={form} noValidate onSubmit={handleSubmit}>
          <input
            ref={nameInput}
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Name"
            required
            minLength={2}
            maxLength={50}
            onChange={(e) => setName(e.target.value)}
          />
          {isClicked && name.length < 2 && (
            <div className="error">
              Enter a name that is at least 2 characters long
            </div>
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            maxLength={50}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isClicked && !isValidEmail(email) && (
            <div className="error">
              Enter a valid email address. Example: john@mail.com
            </div>
          )}
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            aria-label="Message"
            required
            minLength={12}
            maxLength={500}
            onChange={(e) => setMessage(e.target.value)}
          />
          {isClicked && message.length < 12 && (
            <div className="error">
              Your message must be at least 12 characters long
            </div>
          )}
          {messageSent && (
            <div className="success-message">
              Thank you! Your message has been sent
            </div>
          )}
          <button>Send Message</button>
        </form>
        <div className="contacts">
          <div className="contact-info">
            <h2>Contact Info:</h2>
            <div className="wrapper">
              <Icon className="contact-icon" path={mdiEmail} />
              <p>christkristina@yahoo.com</p>
            </div>
            <div className="wrapper">
              <Icon className="contact-icon" path={mdiCellphone} />
              <p>+370 </p>
            </div>
            <div className="wrapper">
              <Icon className="contact-icon" path={mdiMapMarker} />
              <p> Lithuania</p>
            </div>
          </div>
          <div className="social-networks">
            <h2>Social Networks:</h2>
            <div className="icons">
              <a
                href="https://github.com/KristinaValu"
                target="_blank"
                aria-label="GitHub"
              >
                <Icon className="social-icon" path={mdiGithub} size={1.3} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <Icon className="social-icon" path={mdiFacebook} size={1.3} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <Icon className="social-icon" path={mdiLinkedin} size={1.3} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;