import React from "react";
import "./Header.css";
import header from "../../images/header.svg";

function Header() {
  return (
    <section className="header" id="home">
      <img src={header} alt="Юля невеста" className="header__text"></ img>
    </section>
  );
}

export default Header;