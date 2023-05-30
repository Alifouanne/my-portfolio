import React from "react";
import me from "../../assets/me.png";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ali Fouanne</h1>
        <h5 className="text-light">
          Software Engineer | Front-end web developer | React Developer
        </h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
