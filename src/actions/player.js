export const createPlayer = name => (
  {
    type: 'CREATE_PLAYER',
    payload: {
      name,
      hand: {},
      combination: {},
      winRate: 0,
    },
  }
);

export default createPlayer;
