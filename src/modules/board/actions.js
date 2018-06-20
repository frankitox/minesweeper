import _, { range, shuffle, take, reduce } from 'lodash';
import 'lodash.product';
import {
  LOAD_BOARD,
  START_GAME,
  UNFLAG_SQUARE,
  FLAG_SQUARE,
  TAP_SQUARE,
  SET_DURATION
} from './actionTypes';

export const loadBoard = board => ({
  type: LOAD_BOARD,
  payload: board
});

export const startGame = ({ mines, width, height }) => ({
  type: START_GAME,
  payload: {
    mines: reduce(
      take(shuffle(_.product(range(width), range(height))), mines),
      (mines, newMine) => ({ ...mines, [`${newMine[0]}-${newMine[1]}`]: true }),
      {}
    ),
    startedAt: new Date().getTime()
  }
});

export const flagSquare = ({ coords }) => ({
  type: FLAG_SQUARE,
  payload: { coords }
});

export const unflagSquare = ({ coords }) => ({
  type: UNFLAG_SQUARE,
  payload: { coords }
});

export const tapSquare = ({ coords, players, difficulty, width, height }) => ({
  type: TAP_SQUARE,
  payload: {
    coords,
    players,
    maybeEndAt: new Date().getTime(),
    difficulty,
    width,
    height
  }
});

export const setDuration = ({ millis }) => ({
  type: SET_DURATION,
  payload: { millis }
});
