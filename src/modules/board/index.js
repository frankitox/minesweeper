import _, {
  range,
  map,
  orderBy,
  keys,
  intersection,
  isEmpty,
  size,
  flatMap,
  concat,
  omit,
  filter,
  reduce
} from 'lodash';
import 'lodash.product';
import {
  LOAD_BOARD,
  START_GAME,
  FLAG_SQUARE,
  UNFLAG_SQUARE,
  TAP_SQUARE,
  SET_DURATION
} from './actionTypes';
import { getSetup } from './../setup';
import { difficultyWeight } from './../setup/difficulties';
import { WON, LOST, PLAYING } from './statuses';
import moment from 'moment';

window.moment = moment;

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

const nextPlayer = (currentPlayer, players) =>
  (Number(currentPlayer) + 1) % players;

export const boardKey = 'board';

export const getHistory = state => ({
  gamesPlayed: orderBy(
    map(state[boardKey].history, item => ({
      startedAt: moment(item.startedAt).format('MM-DD-YYYY hh:mma'),
      endAt: moment(item.endAt).format('MM-DD-YYYY hh:mma'),
      difficulty: item.difficulty.toLowerCase(),
      difficultyIndex: difficultyWeight(item.difficulty),
      totalTimeSpent: `${item.duration / 1000} seconds`,
      status: `Player ${item.lastPlayer + 1} ${item.status}`,
      duration: item.duration
    })),
    ['difficultyIndex', 'duration'],
    ['desc', 'asc']
  )
});

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

const clearZeroes = ({ width, height, mines, uncovered, flags }, toUncover) => {
  if (isEmpty(toUncover)) {
    return uncovered;
  }
  const [firstToUncover, ...nextToUncover] = toUncover;
  const [row, col] = firstToUncover;
  const newUncovered = { ...uncovered, [toObjKey(row, col)]: true };
  if (getObjValue(flags, row, col)) {
    return clearZeroes(
      { width, height, mines, uncovered, flags },
      nextToUncover
    );
  }
  if (0 !== minesAround({ mines }, { width, height }, row, col)) {
    return clearZeroes(
      { width, height, mines, uncovered: newUncovered, flags },
      nextToUncover
    );
  }
  return clearZeroes(
    {
      width,
      height,
      mines,
      uncovered: newUncovered,
      flags
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

const getMinesLeft = ({ mines, flags }) => size(mines) - size(flags);

export const getBoard = state => {
  const { width, height } = getSetup(state);
  const boardState = state[boardKey];
  const squares = map(range(height), row =>
    map(range(width), col => {
      const { mine, flagged, uncover } = getSquare(boardState, row, col);
      const nMines = String(
        minesAround(boardState, { width, height }, row, col)
      );
      return {
        mine,
        flagged,
        uncovered: uncover,
        content: uncover ? (mine ? '*' : nMines) : flagged ? 'F' : ''
      };
    })
  );
  const { mines, flags, duration, currentPlayer } = boardState;
  return {
    currentPlayer: String(currentPlayer + 1),
    squares,
    duration: Math.floor(duration / 1000),
    status: getGameStatus(boardState, { width, height }),
    minesLeft: String(getMinesLeft({ mines, flags }))
  };
};

const getGameStatus = ({ mines, uncovered }, { width, height }) => {
  if (!isEmpty(intersection(keys(mines), keys(uncovered)))) {
    return LOST;
  }
  if (size(mines) + size(uncovered) === width * height) {
    return WON;
  }
  return PLAYING;
};

const boardReducer = (state = initialState, action) => {
  let row, col, square;
  switch (action.type) {
    case LOAD_BOARD:
      return action.payload;
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
      const noMinesLeft =
        getMinesLeft({ mines: state.mines, flags: state.flags }) === 0;
      return square.flagged || square.uncover || noMinesLeft
        ? state
        : {
            ...state,
            flags: { ...state.flags, [toObjKey(row, col)]: true }
          };
    case UNFLAG_SQUARE:
      [row, col] = action.payload.coords;
      square = getSquare(state, row, col);
      return !square.flagged || square.uncover
        ? state
        : { ...state, flags: omit(state.flags, toObjKey(row, col)) };
    case TAP_SQUARE:
      [row, col] = action.payload.coords;
      square = getSquare(state, row, col);
      if (square.flagged || square.uncover) {
        return state;
      }
      const newUncovered = square.mine
        ? {
            ...state.uncovered,
            [toObjKey(row, col)]: true
          }
        : clearZeroes(
            {
              width: action.payload.width,
              height: action.payload.height,
              uncovered: state.uncovered,
              mines: state.mines,
              flags: state.flags
            },
            [[row, col]]
          );
      const gameStatus = getGameStatus(
        { mines: state.mines, uncovered: newUncovered },
        { width: action.payload.width, height: action.payload.height }
      );
      const newHistory =
        gameStatus === PLAYING
          ? state.history
          : [
              ...state.history,
              {
                startedAt: state.startedAt,
                duration: state.duration,
                endAt: action.payload.maybeEndAt,
                difficulty: action.payload.difficulty,
                lastPlayer: state.currentPlayer,
                status: gameStatus
              }
            ];
      if (square.mine) {
        return {
          ...state,
          history: newHistory,
          uncovered: {
            ...state.uncovered,
            [toObjKey(row, col)]: true
          }
        };
      }
      return {
        ...state,
        uncovered: newUncovered,
        history: newHistory,
        currentPlayer:
          getGameStatus(
            { mines: state.mines, uncovered: newUncovered },
            { width: action.payload.width, height: action.payload.height }
          ) === WON
            ? state.currentPlayer
            : nextPlayer(state.currentPlayer, action.payload.players)
      };

    case SET_DURATION:
      return {
        ...state,
        duration: action.payload.millis
      };
    default:
      return state;
  }
};

export default boardReducer;
