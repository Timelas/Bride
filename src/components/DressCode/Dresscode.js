import React from "react";
import dresscode from "../../images/dresscode.svg";
import "./Dresscode.css";
import Gallery from "../Slider/Slider";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Я буду очень благодарна, если ваши образы будут
подобраны в стилистике мероприятия.</p>
        <Gallery />
    </section>
  );
}

export default Dresscode;