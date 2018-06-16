import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Play from './Play';
import History from './History';
import Setup from './Setup';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/play" component={Play} />
      <Route path="/history" component={History} />
      <Route path="/setup" component={Setup} />
    </div>
  </Router>
);

export default App;
