import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { identity } from 'lodash';
import { loadBoard } from './modules/board/actions';
import { loadSetup } from './modules/setup/actions';
import Home from './Home';
import Play from './Play';
import History from './History';
import Setup from './Setup';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { loadSetup, loadBoard } = props;
    const { setup, board } =
      JSON.parse(localStorage.getItem('minesweeper')) || {};
    if (setup && board) {
      loadSetup(setup);
      loadBoard(board);
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/play" component={Play} />
        <Route path="/history" component={History} />
        <Route path="/setup" component={Setup} />
      </div>
    );
  }
}

App.propTypes = {
  loadSetup: PropTypes.func.isRequired,
  loadBoard: PropTypes.func.isRequired
};

export default connect(
  identity,
  { loadBoard, loadSetup }
)(App);
