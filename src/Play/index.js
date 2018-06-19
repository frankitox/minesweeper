import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { inputProps } from './../Setup';
import Counter from './../Counter';
import Button from './../Button';
import { getSetup } from './../modules/setup';
import { getBoard } from './../modules/board';
import * as boardActions from './../modules/board/actions';
import { LOST, PLAYING, WON } from './../modules/board/statuses';

class Play extends React.Component {
  constructor(props) {
    super(props);
    const { startGame, setup } = props;
    const { width, height, mines } = setup;
    startGame({ width, height, mines });
  }

  render() {
    const {
      setup,
      squares,
      flagSquare,
      unflagSquare,
      tick,
      currentPlayer,
      tapSquare,
      status,
      duration,
      minesLeft
    } = this.props;
    return (
      <div>
        <h1>
          Player {currentPlayer} {status}
        </h1>
        {status === PLAYING ? (
          <Counter time={duration} everySecond={tick} />
        ) : (
          duration
        )}
        <Button to="/">Back</Button>
        <h1>{minesLeft} mines</h1>
        {squares.map((row, rowI) => (
          <div key={rowI}>
            {row.map((square, squareI) => (
              <span
                style={{ width: 10, display: 'inline-block' }}
                key={squareI}
                onClick={() => {
                  if (status === PLAYING) {
                    tapSquare({
                      players: setup.players,
                      coords: [rowI, squareI],
                      difficulty: setup.difficulty,
                      height: setup.height,
                      width: setup.width
                    });
                  }
                }}
                onContextMenu={e => {
                  e.preventDefault();
                  if (status === PLAYING) {
                    (square.flagged ? unflagSquare : flagSquare)({
                      coords: [rowI, squareI]
                    });
                  }
                }}
              >
                {square.content}
              </span>
            ))}
          </div>
        ))}
        {setup.difficulty && (
          <p>Difficulty: {setup.difficulty.toLowerCase()}</p>
        )}
      </div>
    );
  }
}

Play.propTypes = {
  setup: PropTypes.shape(
    pick(inputProps, ['players', 'height', 'width', 'difficulty'])
  ).isRequired,
  status: PropTypes.oneOf([LOST, PLAYING, WON]).isRequired,
  currentPlayer: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  minesLeft: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired,
  flagSquare: PropTypes.func.isRequired,
  tapSquare: PropTypes.func.isRequired,
  tick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        mine: PropTypes.bool,
        flagged: PropTypes.bool,
        uncovered: PropTypes.bool,
        content: PropTypes.string.isRequired
      })
    ).isRequired
  ).isRequired
};

const mapStateToProps = state => {
  const setup = getSetup(state);
  const board = getBoard(state);
  return { setup, ...board };
};

export default connect(
  mapStateToProps,
  boardActions
)(Play);
