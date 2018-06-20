import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './../Button';
import PageTitle from './../PageTitle';
import FlatInputText from './../FlatInputText';
import { getSetup } from './../modules/setup';
import { EASY, MEDIUM, HARD } from './../modules/setup/difficulties';
import * as setupActions from './../modules/setup/actions';
import './Setup.css';

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
  <div className="Setup">
    <PageTitle>Setup</PageTitle>
    <div className="Setup__form">
      <div className="Setup__form-item">
        <label className="Setup__form-label" htmlFor="mines">
          Mines:{' '}
        </label>
        <FlatInputText
          type="text"
          id="mines"
          value={mines}
          onChange={e => setMines(e.target.value)}
        />{' '}
      </div>
      <div className="Setup__form-item">
        <label className="Setup__form-label" htmlFor="height">
          Height:{' '}
        </label>
        <FlatInputText
          type="text"
          id="height"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />{' '}
      </div>
      <div className="Setup__form-item">
        <label className="Setup__form-label" htmlFor="width">
          Width:{' '}
        </label>
        <FlatInputText
          type="text"
          id="width"
          value={width}
          onChange={e => setWidth(e.target.value)}
        />{' '}
      </div>
      <div className="Setup__form-item">
        <label className="Setup__form-label" htmlFor="players">
          Players:{' '}
        </label>
        <FlatInputText
          type="text"
          id="players"
          value={players}
          onChange={e => setPlayers(e.value)}
        />{' '}
      </div>
      <div className="Setup__form-item">
        <span className="Setup__form-checkbox">
          <input
            type="checkbox"
            id="difficulty-easy"
            name="difficulty"
            value="EASY"
            checked={difficulty === EASY}
            readOnly
            onClick={e => setDifficulty(EASY)}
          />
          <label htmlFor="difficulty-easy">Easy</label>
        </span>
        <span className="Setup__form-checkbox">
          <input
            type="checkbox"
            id="difficulty-medium"
            name="difficulty"
            value="MEDIUM"
            checked={difficulty === MEDIUM}
            readOnly
            onClick={e => setDifficulty(MEDIUM)}
          />
          <label htmlFor="difficulty-medium">Medium</label>
        </span>
        <span className="Setup__form-checkbox">
          <input
            type="checkbox"
            id="difficulty-hard"
            name="difficulty"
            value="HARD"
            checked={difficulty === HARD}
            readOnly
            onClick={e => setDifficulty(HARD)}
          />
          <label htmlFor="difficulty-hard">Hard</label>
        </span>
      </div>
    </div>
    <div className="Setup__navigation">
      <Button to="/">Back</Button>
      <Button to="/play">Play</Button>
    </div>
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
