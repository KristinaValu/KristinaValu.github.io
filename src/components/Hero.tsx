import "../scss/Hero.scss";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { Icon } from "@mdi/react";
import { mdiEmail, mdiGithub, mdiLinkedin, mdiFacebook } from "@mdi/js";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, my name is Kristina. I am currently learning front-end programming. I am deepening my knowledge in Javascript, React, TypeScript..."],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
      <p className="intro">Hello! 👋 My name is</p>
      <h1>Kristina</h1>
      <div className="hero-bottom-wrapper">
        <p>
          <span ref={el} className="headline"></span>
        </p>
        <div className="contact-icons" id="about">
          <a href="mailto:christkristina@yahoo.com" aria-label="Email">
            <Icon className="icon" path={mdiEmail} size={1.7} />
          </a>
          <a href="https://github.com/" target="_blank" aria-label="GitHub">
            <Icon className="icon" path={mdiGithub} size={1.7} />
          </a>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            aria-label="Linkedin"
          >
            <Icon className="icon" path={mdiLinkedin} size={1.7} />
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Icon className="icon" path={mdiFacebook} size={1.7} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;