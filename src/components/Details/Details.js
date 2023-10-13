import React from "react";
import details from "../../images/details.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Сегодня тот день, к которому все твои подружки уже сошли с ума. Мы попытались сделать этот день максимально комфортным для тебя. <br /><br /> Выбери элегантную и удобную одежду, сделать свои важные дела и примерно к 13:00 приехать к сестренке Насте, а дальше доверься ей.</p>
    </section>
  );
}

export default Details;