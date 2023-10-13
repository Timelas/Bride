import React from "react";
import "./BurgerMenu.css";

function BurgerMenu(props) {
  const {isOpenBurger, onCloseBurger} = props;

  return (
    <section className={`burger-menu burger-menu_${isOpenBurger && 'visible'}`}>
      <ul className="burger-menu__links">
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#home" className="burger-menu__ancor">ГЛАВНАЯ</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#place" className="burger-menu__ancor">ГДЕ</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#dresscode" className="burger-menu__ancor">ДРЕСС КОД</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#questions" className="burger-menu__ancor">ОПРОС</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#details" className="burger-menu__ancor">ДЕТАЛИ</a></li>
      </ul>
    </section>
  );
}

export default BurgerMenu;