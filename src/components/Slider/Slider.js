import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slider1 from "../../images/slider1.jpeg";
import slider2 from "../../images/slider2.jpeg";
import slider3 from "../../images/slider3.jpeg";
import slider4 from "../../images/slider4.jpeg";
import slider5 from "../../images/slider5.jpeg";
import slider6 from "../../images/slider6.jpeg";
import slider7 from "../../images/slider7.jpeg";
import slider8 from "../../images/slider8.jpeg";
import slider9 from "../../images/slider9.jpeg";
import arrow from "../../images/arrow.svg";
import "../DressCode/Dresscode.css";
import "./Slider.css";


const Gallery = () => {
  return (
    <AliceCarousel 
        mouseTracking
        disableDotsControls 
        responsive={{
            0: { items: 3 },
            500: { items: 4 },
            1024: { items: 5 }
        }}
        infinite={true}
        renderPrevButton={() => {
          return <img className="slider__btn slider__btn-pre"
          alt="стрелка назад"
          src={arrow}></img>
        }}
        renderNextButton={() => {
          return <img className="slider__btn slider__btn-next"
          alt="стрелка вперед"
          src={arrow}></img>
        }}
    >
        <img key={slider1} src={slider1} alt="dresscode" className="dresscode__image"></img>
        <img key={slider2} src={slider2} alt="dresscode" className="dresscode__image"></img>
        <img key={slider3} src={slider3} alt="dresscode" className="dresscode__image"></img>
        <img key={slider4} src={slider4} alt="dresscode" className="dresscode__image"/>
        <img key={slider5} src={slider5} alt="dresscode" className="dresscode__image"/>
        <img key={slider6} src={slider6} alt="dresscode" className="dresscode__image"/>
        <img key={slider7} src={slider7} alt="dresscode" className="dresscode__image"/>
        <img key={slider8} src={slider8} alt="dresscode" className="dresscode__image"/>
        <img key={slider9} src={slider9} alt="dresscode" className="dresscode__image"/>
    </AliceCarousel>
  );
}

export default Gallery;