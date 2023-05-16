import "../scss/About.scss";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about-container">
      <div className="hidden about-wrapper">
        <h1>ABOUT ME</h1>
        <p>
        I am a career changer. From economics to programming...I'm on the go, learning new interesting things every day.
        </p>
        
        <p>
          Positive mindset enthusiast – I tend to focus on the good in any given
          situation, and approach challenges or awkward situations in an
          optimistic and productive way.
        </p>
        <p>
        I am a career changer. From economics to programming...I'm on the go, learning new interesting things every day.
        </p>
        
        <p>
          Positive mindset enthusiast – I tend to focus on the good in any given
          situation, and approach challenges or awkward situations in an
          optimistic and productive way.
        </p>
       
      </div>
     
      <div className="skills-wrapper">
        <h1>SKILLS</h1>
        <div className="all-skills">
          <div className="col">
            <div className="skill">
              <img src="TypeScript.svg" alt="typescript" />
              <span>TypeScript</span>
            </div>
            <div className="skill">
              <img src="React-Dark.svg" alt="react" />
              <span>React</span>
            </div>
            <div className="skill">
              <img src="HTML.svg" alt="html" />
              <span>HTML</span>
            </div>
            <div className="skill">
              <img src="Vite-Dark.svg" alt="vite" />
              <span>Vite</span>
            </div>
            <div className="skill">
              <img src="Github-Dark.svg" alt="github" />
              <span>GitHub</span>
            </div>
          </div>

          <div className="col">
            <div className="skill">
              <img src="JavaScript.svg" alt="javascript" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img src="CSS.svg" alt="css" />
              <span>CSS</span>
            </div>
            <div className="skill">
              <img src="Sass.svg" alt="sass" />
              <span>SASS/SCSS</span>
            </div>
            <div className="skill">
              <img src="Git.svg" alt="git" />
              <span>Git</span>
            </div>
            <div className="skill">
              <img src="VSCode-Dark.svg" alt="vs code" />
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;