import { forEach } from 'lodash';
import boardReducer from './board';
import easyMinesweeper from './board-samples/easyMinesweeper';
import reflag from './board-samples/reflag';
import playerTwoLost from './board-samples/playerTwoLost';
import basicSetup from './setup-samples/basicSetup';

const samples = [
  {
    description: 'Easy one-click minesweeper',
    data: easyMinesweeper
  },
  {
    description: "Try flagging more than what's allowed, then unflag",
    data: reflag
  },
  {
    description: 'Player 2 losses the match',
    data: playerTwoLost
  },
  {
    description: 'Basic setup tinkering',
    data: basicSetup
  }
];

forEach(samples, ({ description, data }) => {
  describe(description, () => {
    forEach(data, ({ from, to, action }) => {
      test(action.type, () => {
        expect(boardReducer(from, action)).toEqual(to);
      });
    });
  });
});
