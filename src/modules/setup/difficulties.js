export const EASY = 'EASY';
export const MEDIUM = 'MEDIUM';
export const HARD = 'HARD';

export const difficultyWeight = difficulty =>
  difficulty === HARD
    ? 30
    : difficulty === MEDIUM
      ? 20
      : difficulty === EASY
        ? 10
        : 0;
