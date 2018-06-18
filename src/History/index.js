import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import Button from './../Button';
import { getHistory } from './../modules/board';

const History = ({ gamesPlayed }) => (
  <div>
    <table>
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
          <tr key={gameIndex}>
            <td>{game.startedAt}</td>
            <td>{game.endAt}</td>
            <td>{game.difficulty}</td>
            <td>{game.totalTimeSpent}</td>
            <td>{game.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Button to="/">Back</Button>
    <Button to="/play">Play</Button>
  </div>
);

export default connect(getHistory)(History);
