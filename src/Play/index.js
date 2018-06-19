import React from 'react';
import { connect } from 'react-redux';
import Counter from './../Counter';
import Button from './../Button';
import { getSetup } from './../modules/setup';
import { getBoard } from './../modules/board';
import * as boardActions from './../modules/board/actions';
import { PLAYING } from './../modules/board/statuses';

// TODO: https://stackoverflow.com/questions/28648292/right-click-menu-using-react-js
// right click hide menu

class Play extends React.Component {
  constructor(props) {
    super(props);
    const { startGame, setup } = props;
    startGame(setup);
  }

  render() {
    const {
      setup,
      board,
      flagSquare,
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
          Player {currentPlayer + 1} {status}
        </h1>
        {status === PLAYING ? (
          <Counter time={duration} everySecond={tick} />
        ) : (
          duration
        )}
        <Button to="/">Back</Button>
        <h1>{minesLeft} mines</h1>
        {board.map((row, rowI) => (
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
                onContextMenu={() => {
                  if (status === PLAYING) {
                    flagSquare({
                      players: setup.players,
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

const mapStateToProps = state => {
  const setup = getSetup(state);
  const { currentPlayer, board, status, minesLeft, duration } = getBoard(state);
  return {
    setup,
    board,
    status,
    duration,
    minesLeft,
    currentPlayer
  };
};

export default connect(
  mapStateToProps,
  boardActions
)(Play);
