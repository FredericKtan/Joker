import { append, merge, without } from 'ramda';

const defaultPlayer = {
  name: 'Unknown',
  hand: {},
  combination: {},
  winRate: 0,
};

const playerReducer = (state = defaultPlayer, action) => {
  switch (action.type) {
    // case 'CREATE_PLAYER':
    //   return merge(state, { name: action.payload.name });
    case 'DRAW_CARD':
      return merge(state, { hand: append(action.payload.card, state.hand) });
    case 'DISCARD_CARD':
      return merge(state, { hand: without(action.payload.card, state.hand) });
    default:
      return state;
  }
};

export default playerReducer;
