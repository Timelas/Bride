import React from 'react';
import Countdown from 'react-countdown';
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import InfoDate from "../InfoDate/InfoDate";
import Dresscode from "../DressCode/Dresscode";
import Timer from "../Timer/Timer";
import './App.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function App() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [isCloseBurger, setIsCloseBurger] = React.useState(true);
  const [isChangeBurger, setIsChangeBurger] = React.useState(false);

  function changeBurger() {
    if (isChangeBurger) {
      handleCloseBurger ();
    } else {
      handleOpenBurger ();
    }
  }
  
  function handleOpenBurger () {
    setIsOpenBurger(true);
    setIsButtonVisible(false);
    setIsCloseBurger(false);
    setIsChangeBurger(true);
  }

  function handleCloseBurger () {
    setIsOpenBurger(false);
    setIsButtonVisible(true);
    setIsCloseBurger(true);
    setIsChangeBurger(false);
  }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Dresscode />;
    } else {
      return <Timer
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}/>;
    }
  };

  return (
    <div className="App">
      <div className="App__main">
        <Header />
        {/* <Details /> */}
        <Countdown
          date={"2023-10-14T13:50:00+00:00"}
          renderer={renderer}/>
      </div>
    </div>
  );
}

export default App;
