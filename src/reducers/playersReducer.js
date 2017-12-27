import { combineReducers } from 'redux';
import { append } from 'ramda';

import handReducer from './handReducer';

const defaultPlayers = [

];

const playerReducer = (state = defaultPlayers, action) => {
  switch (action.type) {
    case 'DISTRIBUTE_CARDS':
      return append([], state);
    default:
      return state;
  }
};


const playersReducer = combineReducers({
  player: playerReducer,
  hand: handReducer,
});

export default playersReducer;
