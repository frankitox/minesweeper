import React from 'react';
import Button from './../Button';
import './Home.css';

const Home = () => (
  <div className="Home">
    <div className="Home__item">
      <img className="Home__logo" src="mine.png" alt="Mine" />
    </div>
    <div className="Home__item">
      <Button to="/play">Play</Button>
    </div>
    <div className="Home__item">
      <Button to="/history">History</Button>
    </div>
    <div className="Home__item">
      <Button to="/setup">Setup</Button>
    </div>
  </div>
);

export default Home;
