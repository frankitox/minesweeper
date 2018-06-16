import {
  SET_PLAYERS,
  SET_MINES,
  SET_HEIGHT,
  SET_WIDTH,
  SET_DIFFICULTY
} from './actionTypes';

export const setPlayers = players => ({
  type: SET_PLAYERS,
  payload: players
});

export const setMines = mines => ({
  type: SET_MINES,
  payload: mines
});

export const setHeight = height => ({
  type: SET_HEIGHT,
  payload: height
});

export const setWidth = width => ({
  type: SET_WIDTH,
  payload: width
});

export const setDifficulty = difficulty => ({
  type: SET_DIFFICULTY,
  payload: difficulty
});
