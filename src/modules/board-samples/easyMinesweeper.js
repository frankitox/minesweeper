export default [
  {
    from: {
      mines: {},
      flags: {},
      uncovered: {},
      startedAt: 0,
      duration: 0,
      history: []
    },
    to: {
      mines: {},
      flags: {},
      uncovered: {},
      startedAt: 0,
      duration: 0,
      history: []
    },
    action: {
      type: 'LOAD_SETUP',
      payload: {
        height: 10,
        width: 10,
        mines: 1,
        players: 2
      }
    }
  },
  {
    from: {
      mines: {},
      flags: {},
      uncovered: {},
      startedAt: 0,
      duration: 0,
      history: []
    },
    to: {
      mines: {
        '9-9': true
      },
      flags: {},
      uncovered: {},
      startedAt: 1529531444474,
      duration: 0,
      history: [
        {
          startedAt: 1529529488585,
          duration: 1000,
          endAt: 1529529490156,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529913551,
          duration: 14000,
          endAt: 1529529928273,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529936158,
          duration: 4000,
          endAt: 1529529940341,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529959308,
          duration: 4000,
          endAt: 1529529963450,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529972754,
          duration: 9000,
          endAt: 1529529981846,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531129715,
          duration: 0,
          endAt: 1529531141869,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531206991,
          duration: 0,
          endAt: 1529531209621,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531274136,
          duration: 0,
          endAt: 1529531276184,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531313541,
          duration: 0,
          endAt: 1529531315175,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531340907,
          duration: 0,
          endAt: 1529531342515,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531368434,
          duration: 0,
          endAt: 1529531381678,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'WON'
        }
      ],
      currentPlayer: 0,
      currentTime: 0
    },
    action: {
      type: 'LOAD_BOARD',
      payload: {
        mines: {
          '9-9': true
        },
        flags: {},
        uncovered: {},
        startedAt: 1529531444474,
        duration: 0,
        history: [
          {
            startedAt: 1529529488585,
            duration: 1000,
            endAt: 1529529490156,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529529913551,
            duration: 14000,
            endAt: 1529529928273,
            difficulty: 'EASY',
            lastPlayer: 1,
            status: 'LOST'
          },
          {
            startedAt: 1529529936158,
            duration: 4000,
            endAt: 1529529940341,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529529959308,
            duration: 4000,
            endAt: 1529529963450,
            difficulty: 'EASY',
            lastPlayer: 1,
            status: 'LOST'
          },
          {
            startedAt: 1529529972754,
            duration: 9000,
            endAt: 1529529981846,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529531129715,
            duration: 0,
            endAt: 1529531141869,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529531206991,
            duration: 0,
            endAt: 1529531209621,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529531274136,
            duration: 0,
            endAt: 1529531276184,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529531313541,
            duration: 0,
            endAt: 1529531315175,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529531340907,
            duration: 0,
            endAt: 1529531342515,
            difficulty: 'EASY',
            lastPlayer: 0,
            status: 'WON'
          },
          {
            startedAt: 1529531368434,
            duration: 0,
            endAt: 1529531381678,
            difficulty: 'EASY',
            lastPlayer: 1,
            status: 'WON'
          }
        ],
        currentPlayer: 0,
        currentTime: 0
      }
    }
  },
  {
    from: {
      mines: {
        '9-9': true
      },
      flags: {},
      uncovered: {},
      startedAt: 1529531444474,
      duration: 0,
      history: [
        {
          startedAt: 1529529488585,
          duration: 1000,
          endAt: 1529529490156,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529913551,
          duration: 14000,
          endAt: 1529529928273,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529936158,
          duration: 4000,
          endAt: 1529529940341,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529959308,
          duration: 4000,
          endAt: 1529529963450,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529972754,
          duration: 9000,
          endAt: 1529529981846,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531129715,
          duration: 0,
          endAt: 1529531141869,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531206991,
          duration: 0,
          endAt: 1529531209621,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531274136,
          duration: 0,
          endAt: 1529531276184,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531313541,
          duration: 0,
          endAt: 1529531315175,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531340907,
          duration: 0,
          endAt: 1529531342515,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531368434,
          duration: 0,
          endAt: 1529531381678,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'WON'
        }
      ],
      currentPlayer: 0,
      currentTime: 0
    },
    to: {
      mines: {
        '5-9': true
      },
      flags: {},
      uncovered: {},
      startedAt: 1529532243510,
      duration: 0,
      history: [
        {
          startedAt: 1529529488585,
          duration: 1000,
          endAt: 1529529490156,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529913551,
          duration: 14000,
          endAt: 1529529928273,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529936158,
          duration: 4000,
          endAt: 1529529940341,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529959308,
          duration: 4000,
          endAt: 1529529963450,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529972754,
          duration: 9000,
          endAt: 1529529981846,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531129715,
          duration: 0,
          endAt: 1529531141869,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531206991,
          duration: 0,
          endAt: 1529531209621,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531274136,
          duration: 0,
          endAt: 1529531276184,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531313541,
          duration: 0,
          endAt: 1529531315175,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531340907,
          duration: 0,
          endAt: 1529531342515,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531368434,
          duration: 0,
          endAt: 1529531381678,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'WON'
        }
      ],
      currentPlayer: 0,
      currentTime: 0
    },
    action: {
      type: 'START_GAME',
      payload: {
        mines: {
          '5-9': true
        },
        startedAt: 1529532243510
      }
    }
  },
  {
    from: {
      mines: {
        '5-9': true
      },
      flags: {},
      uncovered: {},
      startedAt: 1529532243510,
      duration: 0,
      history: [
        {
          startedAt: 1529529488585,
          duration: 1000,
          endAt: 1529529490156,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529913551,
          duration: 14000,
          endAt: 1529529928273,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529936158,
          duration: 4000,
          endAt: 1529529940341,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529959308,
          duration: 4000,
          endAt: 1529529963450,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529972754,
          duration: 9000,
          endAt: 1529529981846,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531129715,
          duration: 0,
          endAt: 1529531141869,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531206991,
          duration: 0,
          endAt: 1529531209621,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531274136,
          duration: 0,
          endAt: 1529531276184,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531313541,
          duration: 0,
          endAt: 1529531315175,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531340907,
          duration: 0,
          endAt: 1529531342515,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531368434,
          duration: 0,
          endAt: 1529531381678,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'WON'
        }
      ],
      currentPlayer: 0,
      currentTime: 0
    },
    to: {
      mines: {
        '5-9': true
      },
      flags: {},
      uncovered: {
        '6-6': true,
        '6-5': true,
        '6-4': true,
        '6-3': true,
        '6-2': true,
        '6-1': true,
        '6-0': true,
        '5-0': true,
        '5-1': true,
        '5-2': true,
        '5-3': true,
        '5-4': true,
        '5-5': true,
        '5-6': true,
        '5-7': true,
        '5-8': true,
        '4-7': true,
        '4-6': true,
        '4-5': true,
        '4-4': true,
        '4-3': true,
        '4-2': true,
        '4-1': true,
        '4-0': true,
        '3-0': true,
        '3-1': true,
        '3-2': true,
        '3-3': true,
        '3-4': true,
        '3-5': true,
        '3-6': true,
        '3-7': true,
        '3-8': true,
        '3-9': true,
        '2-9': true,
        '2-8': true,
        '2-7': true,
        '2-6': true,
        '2-5': true,
        '2-4': true,
        '2-3': true,
        '2-2': true,
        '2-1': true,
        '2-0': true,
        '1-0': true,
        '1-1': true,
        '1-2': true,
        '1-3': true,
        '1-4': true,
        '1-5': true,
        '1-6': true,
        '1-7': true,
        '1-8': true,
        '1-9': true,
        '0-9': true,
        '0-8': true,
        '0-7': true,
        '0-6': true,
        '0-5': true,
        '0-4': true,
        '0-3': true,
        '0-2': true,
        '0-1': true,
        '0-0': true,
        '4-9': true,
        '4-8': true,
        '6-7': true,
        '6-8': true,
        '7-7': true,
        '7-6': true,
        '7-5': true,
        '7-4': true,
        '7-3': true,
        '7-2': true,
        '7-1': true,
        '7-0': true,
        '8-0': true,
        '8-1': true,
        '8-2': true,
        '8-3': true,
        '8-4': true,
        '8-5': true,
        '8-6': true,
        '8-7': true,
        '8-8': true,
        '8-9': true,
        '7-9': true,
        '7-8': true,
        '6-9': true,
        '9-9': true,
        '9-8': true,
        '9-7': true,
        '9-6': true,
        '9-5': true,
        '9-4': true,
        '9-3': true,
        '9-2': true,
        '9-1': true,
        '9-0': true
      },
      startedAt: 1529532243510,
      duration: 0,
      history: [
        {
          startedAt: 1529529488585,
          duration: 1000,
          endAt: 1529529490156,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529913551,
          duration: 14000,
          endAt: 1529529928273,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529936158,
          duration: 4000,
          endAt: 1529529940341,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529959308,
          duration: 4000,
          endAt: 1529529963450,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529972754,
          duration: 9000,
          endAt: 1529529981846,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531129715,
          duration: 0,
          endAt: 1529531141869,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531206991,
          duration: 0,
          endAt: 1529531209621,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531274136,
          duration: 0,
          endAt: 1529531276184,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531313541,
          duration: 0,
          endAt: 1529531315175,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531340907,
          duration: 0,
          endAt: 1529531342515,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531368434,
          duration: 0,
          endAt: 1529531381678,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'WON'
        },
        {
          startedAt: 1529532243510,
          duration: 0,
          endAt: 1529532244873,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        }
      ],
      currentPlayer: 0,
      currentTime: 0
    },
    action: {
      type: 'TAP_SQUARE',
      payload: {
        coords: [6, 6],
        players: '2',
        maybeEndAt: 1529532244873,
        difficulty: 'EASY',
        width: '10',
        height: '10'
      }
    }
  },
  {
    from: {
      mines: {
        '5-9': true
      },
      flags: {},
      uncovered: {
        '6-6': true,
        '6-5': true,
        '6-4': true,
        '6-3': true,
        '6-2': true,
        '6-1': true,
        '6-0': true,
        '5-0': true,
        '5-1': true,
        '5-2': true,
        '5-3': true,
        '5-4': true,
        '5-5': true,
        '5-6': true,
        '5-7': true,
        '5-8': true,
        '4-7': true,
        '4-6': true,
        '4-5': true,
        '4-4': true,
        '4-3': true,
        '4-2': true,
        '4-1': true,
        '4-0': true,
        '3-0': true,
        '3-1': true,
        '3-2': true,
        '3-3': true,
        '3-4': true,
        '3-5': true,
        '3-6': true,
        '3-7': true,
        '3-8': true,
        '3-9': true,
        '2-9': true,
        '2-8': true,
        '2-7': true,
        '2-6': true,
        '2-5': true,
        '2-4': true,
        '2-3': true,
        '2-2': true,
        '2-1': true,
        '2-0': true,
        '1-0': true,
        '1-1': true,
        '1-2': true,
        '1-3': true,
        '1-4': true,
        '1-5': true,
        '1-6': true,
        '1-7': true,
        '1-8': true,
        '1-9': true,
        '0-9': true,
        '0-8': true,
        '0-7': true,
        '0-6': true,
        '0-5': true,
        '0-4': true,
        '0-3': true,
        '0-2': true,
        '0-1': true,
        '0-0': true,
        '4-9': true,
        '4-8': true,
        '6-7': true,
        '6-8': true,
        '7-7': true,
        '7-6': true,
        '7-5': true,
        '7-4': true,
        '7-3': true,
        '7-2': true,
        '7-1': true,
        '7-0': true,
        '8-0': true,
        '8-1': true,
        '8-2': true,
        '8-3': true,
        '8-4': true,
        '8-5': true,
        '8-6': true,
        '8-7': true,
        '8-8': true,
        '8-9': true,
        '7-9': true,
        '7-8': true,
        '6-9': true,
        '9-9': true,
        '9-8': true,
        '9-7': true,
        '9-6': true,
        '9-5': true,
        '9-4': true,
        '9-3': true,
        '9-2': true,
        '9-1': true,
        '9-0': true
      },
      startedAt: 1529532243510,
      duration: 0,
      history: [
        {
          startedAt: 1529529488585,
          duration: 1000,
          endAt: 1529529490156,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529913551,
          duration: 14000,
          endAt: 1529529928273,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529936158,
          duration: 4000,
          endAt: 1529529940341,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529959308,
          duration: 4000,
          endAt: 1529529963450,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529972754,
          duration: 9000,
          endAt: 1529529981846,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531129715,
          duration: 0,
          endAt: 1529531141869,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531206991,
          duration: 0,
          endAt: 1529531209621,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531274136,
          duration: 0,
          endAt: 1529531276184,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531313541,
          duration: 0,
          endAt: 1529531315175,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531340907,
          duration: 0,
          endAt: 1529531342515,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531368434,
          duration: 0,
          endAt: 1529531381678,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'WON'
        },
        {
          startedAt: 1529532243510,
          duration: 0,
          endAt: 1529532244873,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        }
      ],
      currentPlayer: 0,
      currentTime: 0
    },
    to: {
      mines: {
        '5-9': true
      },
      flags: {},
      uncovered: {
        '6-6': true,
        '6-5': true,
        '6-4': true,
        '6-3': true,
        '6-2': true,
        '6-1': true,
        '6-0': true,
        '5-0': true,
        '5-1': true,
        '5-2': true,
        '5-3': true,
        '5-4': true,
        '5-5': true,
        '5-6': true,
        '5-7': true,
        '5-8': true,
        '4-7': true,
        '4-6': true,
        '4-5': true,
        '4-4': true,
        '4-3': true,
        '4-2': true,
        '4-1': true,
        '4-0': true,
        '3-0': true,
        '3-1': true,
        '3-2': true,
        '3-3': true,
        '3-4': true,
        '3-5': true,
        '3-6': true,
        '3-7': true,
        '3-8': true,
        '3-9': true,
        '2-9': true,
        '2-8': true,
        '2-7': true,
        '2-6': true,
        '2-5': true,
        '2-4': true,
        '2-3': true,
        '2-2': true,
        '2-1': true,
        '2-0': true,
        '1-0': true,
        '1-1': true,
        '1-2': true,
        '1-3': true,
        '1-4': true,
        '1-5': true,
        '1-6': true,
        '1-7': true,
        '1-8': true,
        '1-9': true,
        '0-9': true,
        '0-8': true,
        '0-7': true,
        '0-6': true,
        '0-5': true,
        '0-4': true,
        '0-3': true,
        '0-2': true,
        '0-1': true,
        '0-0': true,
        '4-9': true,
        '4-8': true,
        '6-7': true,
        '6-8': true,
        '7-7': true,
        '7-6': true,
        '7-5': true,
        '7-4': true,
        '7-3': true,
        '7-2': true,
        '7-1': true,
        '7-0': true,
        '8-0': true,
        '8-1': true,
        '8-2': true,
        '8-3': true,
        '8-4': true,
        '8-5': true,
        '8-6': true,
        '8-7': true,
        '8-8': true,
        '8-9': true,
        '7-9': true,
        '7-8': true,
        '6-9': true,
        '9-9': true,
        '9-8': true,
        '9-7': true,
        '9-6': true,
        '9-5': true,
        '9-4': true,
        '9-3': true,
        '9-2': true,
        '9-1': true,
        '9-0': true
      },
      startedAt: 1529532243510,
      duration: 1448,
      history: [
        {
          startedAt: 1529529488585,
          duration: 1000,
          endAt: 1529529490156,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529913551,
          duration: 14000,
          endAt: 1529529928273,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529936158,
          duration: 4000,
          endAt: 1529529940341,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529529959308,
          duration: 4000,
          endAt: 1529529963450,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'LOST'
        },
        {
          startedAt: 1529529972754,
          duration: 9000,
          endAt: 1529529981846,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531129715,
          duration: 0,
          endAt: 1529531141869,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531206991,
          duration: 0,
          endAt: 1529531209621,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531274136,
          duration: 0,
          endAt: 1529531276184,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531313541,
          duration: 0,
          endAt: 1529531315175,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531340907,
          duration: 0,
          endAt: 1529531342515,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        },
        {
          startedAt: 1529531368434,
          duration: 0,
          endAt: 1529531381678,
          difficulty: 'EASY',
          lastPlayer: 1,
          status: 'WON'
        },
        {
          startedAt: 1529532243510,
          duration: 0,
          endAt: 1529532244873,
          difficulty: 'EASY',
          lastPlayer: 0,
          status: 'WON'
        }
      ],
      currentPlayer: 0,
      currentTime: 0
    },
    action: {
      type: 'SET_DURATION',
      payload: {
        millis: 1448
      }
    }
  }
];
