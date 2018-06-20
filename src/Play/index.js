import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { inputProps } from './../Setup';
import Counter from './../Counter';
import Button from './../Button';
import PageTitle from './../PageTitle';
import { getSetup } from './../modules/setup';
import { getBoard } from './../modules/board';
import * as boardActions from './../modules/board/actions';
import { LOST, PLAYING, WON } from './../modules/board/statuses';
import './Play.css';

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
      setDuration,
      currentPlayer,
      tapSquare,
      status,
      duration,
      minesLeft
    } = this.props;
    return (
      <div className="Play">
        <div className="Play__header">
          <PageTitle>
            Player {currentPlayer} {status}
          </PageTitle>
        </div>
        <div className="Play__board">
          {squares.map((row, rowI) => (
            <div key={rowI} className="Play__board-row">
              {row.map((square, squareI) => (
                <span
                  className="Play__square"
                  key={squareI}
                  style={{
                    backgroundColor: square.uncovered
                      ? square.mine
                        ? '#FB667A'
                        : '#323c50'
                      : '#185875'
                  }}
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
        </div>
        <div className="Play__footer">
          <p>
            {status === PLAYING ? (
              <Counter onUnmount={setDuration} />
            ) : (
              duration
            )}
          </p>
          <p>{minesLeft} mines left</p>
          {setup.difficulty && (
            <p>Difficulty: {setup.difficulty.toLowerCase()}</p>
          )}
          <Button to="/">Back</Button>
        </div>
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
  duration: PropTypes.number,
  minesLeft: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired,
  flagSquare: PropTypes.func.isRequired,
  tapSquare: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
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
