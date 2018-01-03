import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import handsReducer from './handsReducer';
import playerReducer from './playerReducer';
import playersReducer from './playersReducer';
import tableReducer from './tableReducer';


const rootReducer = combineReducers({
  cards: cardsReducer,
  hands: handsReducer,
  players: playersReducer,
  table: tableReducer,
});

export default rootReducer;
