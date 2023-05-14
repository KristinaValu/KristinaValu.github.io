import "../scss/Header.scss";
import { useRef } from "react";

function Header() {
  const hamburgerIconRef = useRef<HTMLDivElement>(null);
  const slidingMenuRef = useRef<HTMLDivElement>(null);

  function displayMenu() {
    hamburgerIconRef.current?.classList.toggle("active");
    slidingMenuRef.current?.classList.toggle("active");
  }

  const nav = (
    <>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </>
  );

  return (
    <header>
      <div className="header-container">
        <a href="#home">
          <h3>
            {"<Kristina "}
            <span className="surname-span">Valu </span>
            {"/>"}
          </h3>
        </a>
        <div ref={slidingMenuRef} className="sliding-menu">
          <nav className="small-screen-nav">{nav}</nav>
        </div>
        <div
          ref={hamburgerIconRef}
          className="hamburger-icon"
          onClick={displayMenu}
        >
          <div className="ham-bar bar-top"></div>
          <div className="ham-bar bar-mid"></div>
          <div className="ham-bar bar-bottom"></div>
        </div>
        <nav className="wide-screen-nav">{nav}</nav>
      </div>
    </header>
  );
}

export default Header;
