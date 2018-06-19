import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './../Button';
import { getSetup } from './../modules/setup';
import { EASY, MEDIUM, HARD } from './../modules/setup/difficulties';
import * as setupActions from './../modules/setup/actions';

const Setup = ({
  mines,
  height,
  width,
  players,
  difficulty,
  setMines,
  setWidth,
  setHeight,
  setPlayers,
  setDifficulty
}) => (
  <div>
    <input type="text" value={mines} onChange={e => setMines(e.target.value)} />{' '}
    Mines
    <br />
    <input
      type="text"
      value={height}
      onChange={e => setHeight(e.target.value)}
    />{' '}
    Height
    <br />
    <input
      type="text"
      value={width}
      onChange={e => setWidth(e.target.value)}
    />{' '}
    Width
    <br />
    <input
      type="text"
      value={players}
      onChange={e => setPlayers(e.value)}
    />{' '}
    Players
    <br />
    <input
      type="checkbox"
      id="difficulty-easy"
      name="difficulty"
      value="EASY"
      checked={difficulty === EASY}
      readOnly
      onClick={e => setDifficulty(EASY)}
    />
    <label htmlFor="difficulty-easy">Easy</label> <br />
    <input
      type="checkbox"
      id="difficulty-medium"
      name="difficulty"
      value="MEDIUM"
      checked={difficulty === MEDIUM}
      readOnly
      onClick={e => setDifficulty(MEDIUM)}
    />
    <label htmlFor="difficulty-medium">Medium</label> <br />
    <input
      type="checkbox"
      id="difficulty-hard"
      name="difficulty"
      value="HARD"
      checked={difficulty === HARD}
      readOnly
      onClick={e => setDifficulty(HARD)}
    />
    <label htmlFor="difficulty-hard">Hard</label> <br />
    <Button to="/">Back</Button> <br />
    <Button to="/play">Play</Button>
  </div>
);

export const inputProps = {
  mines: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  players: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf([EASY, MEDIUM, HARD])
};

Setup.propTypes = {
  ...inputProps,
  setMines: PropTypes.func.isRequired,
  setWidth: PropTypes.func.isRequired,
  setHeight: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired
};

export default connect(
  getSetup,
  setupActions
)(Setup);
