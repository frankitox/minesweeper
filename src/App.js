import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as boardActions from './modules/board/actions';
import * as setupActions from './modules/setup/actions';
import Home from './Home';
import Play from './Play';
import History from './History';
import Setup from './Setup';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { loadSetup, loadBoard, startGame, setup } = props;
    const { setup: storedSetup, board: storedBoard } =
      JSON.parse(localStorage.getItem('minesweeper')) || {};
    if (storedSetup) {
      loadSetup(storedSetup);
    }
    if (storedBoard) {
      loadBoard(storedBoard);
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/play" component={Play} />
        <Route path="/history" component={History} />
        <Route path="/setup" component={Setup} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { ...setupActions, ...boardActions }
)(App);
