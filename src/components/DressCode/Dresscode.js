import React from "react";
import dresscode from "../../images/dresscode.svg";
import "./Dresscode.css";
import Gallery from "../Slider/Slider";
import Questions from "../Questions/Questions";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Упс.. что-то восточное в глаз попало. Теперь бери подружку Яну и езжате к тебе домой переодеваться по референсам:</p>
        <Gallery />
        <p className="dresscode__description">Переоделась? Теперь ответь на загадку от Яны и получи адрес следующей точки:</p>
        <Questions />
    </section>
  );
}

export default Dresscode;