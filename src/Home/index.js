import React from 'react';
import Button from './../Button';

const Home = () => (
  <div>
    <ul>
      <li>
        <Button to="/play">Play</Button>
      </li>
      <li>
        <Button to="/history">History</Button>
      </li>
      <li>
        <Button to="/setup">Setup</Button>
      </li>
    </ul>
  </div>
);

export default Home;
