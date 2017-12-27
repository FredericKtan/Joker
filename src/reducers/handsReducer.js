import { append } from 'ramda';

const defaultHands = [

];

const handsReducer = (state = defaultHands, action) => {
  switch (action.type) {
    case 'DISTRIBUTE_CARDS':
      return append(action.payload.hand, state);
    default:
      return state;
  }
};

export default handsReducer;
