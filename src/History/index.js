import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';
import Button from './../Button';
import PageTitle from './../PageTitle';
import { getHistory } from './../modules/board';
import './History.css';

const History = ({ gamesPlayed }) => (
  <div className="History">
    <PageTitle>History</PageTitle>
    <table className="History__table">
      <thead>
        <tr>
          <th>Start time</th>
          <th>End time</th>
          <th>Difficulty</th>
          <th>Total time spent</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {map(gamesPlayed, (game, gameIndex) => (
          <tr className="History__row" key={gameIndex}>
            <td>{game.startedAt}</td>
            <td>{game.endAt}</td>
            <td>{game.difficulty}</td>
            <td>{game.totalTimeSpent}</td>
            <td>{game.status}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="History__navigation">
      <Button to="/">Back</Button>
      <Button to="/play">Play</Button>
    </div>
  </div>
);

History.propTypes = {
  gamesPlayed: PropTypes.arrayOf(
    PropTypes.shape({
      startedAt: PropTypes.string.isRequired,
      endAt: PropTypes.string.isRequired,
      difficulty: PropTypes.string,
      totalTimeSpent: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  )
};

export default connect(getHistory)(History);
