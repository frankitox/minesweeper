import { EASY, MEDIUM, HARD } from './difficulties';
import {
  SET_PLAYERS,
  SET_MINES,
  SET_HEIGHT,
  SET_WIDTH,
  SET_DIFFICULTY
} from './actionTypes';

const mapDifficultyToProps = {
  [EASY]: { height: 10, width: 10, mines: 10 },
  [MEDIUM]: { height: 10, width: 10, mines: 20 },
  [HARD]: { height: 10, width: 20, mines: 80 }
};

const initialState = {
  ...mapDifficultyToProps[MEDIUM],
  players: 1
};

const propsToDifficulty = props => {
  const compare = presetProps =>
    presetProps.height === props.height &&
    presetProps.width === props.width &&
    presetProps.mines === props.mines;
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
  return difficulty ? { ...setup, difficulty: difficulty } : setup;
};

const setupReducer = (state = initialState, action) => {
  switch (action.type) {
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