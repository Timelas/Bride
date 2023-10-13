import React from "react";
import date from "../../images/date.svg";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date" id="place">
      <div className="info-date__when">
        <div className="info-date__what">
        <p className="info-date__time">Начало<br/>в 14:00</p>
        <div className="info-date__line"></div>
        <p className="info-date__time">Окончание <br/>в 00:00</p>
      </div>
      </div>
    </section>
  );
}

export default InfoDate;