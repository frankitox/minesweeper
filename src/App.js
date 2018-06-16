import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/play">Home</Link>
      </li>
      <li>
        <Link to="/history">History</Link>
      </li>
      <li>
        <Link to="/setup">Setup</Link>
      </li>
    </ul>
  </div>
);

const Play = () => (
  <div>
    <h2>Play</h2>
  </div>
);

const History = () => (
  <div>
    <h2>History</h2>
  </div>
);

const Setup = () => (
  <div>
    <h2>Setup</h2>
  </div>
);

export default App;
