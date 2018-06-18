import _, {
  range,
  map,
  keys,
  intersection,
  isEmpty,
  size,
  flatMap,
  concat,
  filter,
  reduce
} from 'lodash';
import 'lodash.product';
import { START_GAME, FLAG_SQUARE, TAP_SQUARE, TICK } from './actionTypes';
import { getSetup } from './../setup';
import { WON, LOST, PLAYING } from './statuses';

const initialState = {
  mines: {},
  flags: {},
  uncovered: {},
  startedAt: 0,
  duration: 0,
  history: []
};

const toObjKey = (row, col) => `${row}-${col}`;

const getObjValue = (obj, row, col) => obj[toObjKey(row, col)];

const getSquare = ({ mines, flags, uncovered }, row, col) => {
  const [mine, flagged, uncover] = [mines, flags, uncovered].map(resource =>
    getObjValue(resource, row, col)
  );
  return { mine, flagged, uncover };
};

const nextPlayer = (currentPlayer, players) => (currentPlayer + 1) % players;

export const boardKey = 'board';

const getNeighbors = ({ width, height }, row, col) => {
  const ops = [x => x, x => x - 1, x => x + 1];
  return flatMap(_.product(ops, ops), ([op1, op2]) => {
    const [newRow, newCol] = [op1(row), op2(col)];
    return 0 <= newRow && newRow < height && 0 <= newCol && newCol < width
      ? [[newRow, newCol]]
      : [];
  });
};

const minesAround = ({ mines }, { width, height }, row, col) =>
  reduce(
    getNeighbors({ width, height }, row, col),
    (m, coords) => (getObjValue(mines, coords[0], coords[1]) ? m + 1 : m),
    0
  );

const clearZeroes = ({ width, height, mines, uncovered }, toUncover) => {
  if (isEmpty(toUncover)) {
    return uncovered;
  }
  const [firstToUncover, ...nextToUncover] = toUncover;
  const [row, col] = firstToUncover;
  const newUncovered = { ...uncovered, [toObjKey(row, col)]: true };
  if (0 !== minesAround({ mines }, { width, height }, row, col)) {
    return clearZeroes(
      { width, height, mines, uncovered: newUncovered },
      nextToUncover
    );
  }
  return clearZeroes(
    {
      width,
      height,
      mines,
      uncovered: newUncovered
    },
    concat(
      filter(
        getNeighbors({ width, height }, row, col),
        ([nRow, nCol]) => !getObjValue(newUncovered, nRow, nCol)
      ),
      nextToUncover
    )
  );
};

export const getBoard = state => {
  const { width, height } = getSetup(state);
  const boardState = state[boardKey];
  const board = map(range(height), row =>
    map(range(width), col => {
      const { mine, flagged, uncover } = getSquare(boardState, row, col);
      const nMines = minesAround(boardState, { width, height }, row, col);
      return {
        mine,
        flagged,
        uncovered: uncover,
        content: uncover ? (mine ? '*' : nMines) : flagged ? 'f' : '■'
      };
    })
  );
  const { mines, flags, duration } = boardState;
  return {
    ...boardState,
    board,
    duration,
    status: getGameStatus(boardState, { width, height }),
    minesLeft: size(mines) - size(flags)
  };
};

const getGameStatus = ({ mines, uncovered }, { width, height }) => {
  if (!isEmpty(intersection(keys(mines), keys(uncovered)))) {
    return LOST;
  }
  if (size(keys(mines)) + size(keys(uncovered)) === width * height) {
    return WON;
  }
  return PLAYING;
};

const boardReducer = (state = initialState, action) => {
  let row, col, square;
  switch (action.type) {
    case START_GAME:
      return {
        ...initialState,
        history: state.history,
        currentPlayer: 0,
        currentTime: 0,
        startedAt: action.payload.startedAt,
        mines: action.payload.mines || initialState.mines
      };
    case FLAG_SQUARE:
      [row, col] = action.payload.coords;
      square = getSquare(state, row, col);
      return square.flagged || square.uncover
        ? state
        : {
            ...state,
            flags: { ...state.flags, [toObjKey(row, col)]: true },
            currentPlayer: nextPlayer(
              state.currentPlayer,
              action.payload.players
            )
          };
    case TAP_SQUARE:
      // if flagged || uncover
      //   nothing
      // else
      //   if mine
      //     player lost
      //     uncover current square
      //     push history
      //   else
      [row, col] = action.payload.coords;
      square = getSquare(state, row, col);
      if (square.flagged || square.uncover) {
        return state;
      }
      if (square.mine) {
        return {
          ...state,
          history: [
            ...state.history,
            {
              startedAt: state.startedAt,
              duration: state.duration,
              endAt: action.payload.maybeEndAt,
              difficulty: action.payload.difficulty,
              lastPlayer: state.currentPlayer,
              status: LOST
            }
          ],
          uncovered: {
            ...state.uncovered,
            [toObjKey(row, col)]: true
          }
        };
      }
      const newUncovered = clearZeroes(
        {
          width: action.payload.width,
          height: action.payload.height,
          uncovered: state.uncovered,
          mines: state.mines
        },
        [[row, col]]
      );
      return {
        ...state,
        uncovered: newUncovered,
        currentPlayer:
          getGameStatus(
            { mines: state.mines, uncovered: newUncovered },
            { width: action.payload.width, height: action.payload.height }
          ) === WON
            ? state.currentPlayer
            : nextPlayer(state.currentPlayer, action.payload.players)
      };

    case TICK:
      return {
        ...state,
        duration: state.duration + action.payload.milis
      };
    default:
      return state;
  }
};

export default boardReducer;
