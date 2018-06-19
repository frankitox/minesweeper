import { pick, mapValues } from 'lodash';
import { EASY, MEDIUM, HARD } from './difficulties';
import {
  LOAD_SETUP,
  SET_PLAYERS,
  SET_MINES,
  SET_HEIGHT,
  SET_WIDTH,
  SET_DIFFICULTY
} from './actionTypes';

const mapDifficultyToProps = {
  [EASY]: { height: 10, width: 10, mines: 1 },
  [MEDIUM]: { height: 10, width: 10, mines: 10 },
  [HARD]: { height: 10, width: 20, mines: 80 }
};

const initialState = {
  ...mapDifficultyToProps[MEDIUM],
  players: 2
};

const propsToDifficulty = props => {
  const compare = presetProps =>
    presetProps.height === Number(props.height) &&
    presetProps.width === Number(props.width) &&
    presetProps.mines === Number(props.mines);
  return compare(mapDifficultyToProps[EASY])
    ? EASY
    : compare(mapDifficultyToProps[MEDIUM])
      ? MEDIUM
      : compare(mapDifficultyToProps[HARD])
        ? HARD
        : undefined;
};

export const setupKey = 'setup';

export const getSetup = state => {
  const setup = state[setupKey];
  const difficulty = propsToDifficulty(setup);
  return {
    ...mapValues(pick(setup, ['mines', 'height', 'width', 'players']), String),
    difficulty
  };
};

const setupReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SETUP:
      return action.payload;
    case SET_PLAYERS:
      return { ...state, players: action.payload };
    case SET_MINES:
      return {
        ...state,
        mines: action.payload
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: action.payload
      };
    case SET_WIDTH:
      return {
        ...state,
        width: action.payload
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        ...(mapDifficultyToProps[action.payload] ||
          mapDifficultyToProps[MEDIUM])
      };
    default:
      return state;
  }
};

export default setupReducer;
