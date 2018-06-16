import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Play from './Play';
import History from './History';
import Setup from './Setup';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/play" component={Play} />
    <Route path="/history" component={History} />
    <Route path="/setup" component={Setup} />
  </div>
);

export default App;
