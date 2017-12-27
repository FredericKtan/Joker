import { append } from 'ramda';

const defaultTable = [

];

const tableReducer = (state = defaultTable, action) => {
  switch (action.type) {
    case 'REVEAL_CARD':
      return append(action.payload.card, state);
    default:
      return state;
  }
};

export default tableReducer;
