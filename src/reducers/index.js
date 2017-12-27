import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import handReducer from './handReducer';
import handsReducer from './handsReducer';
import playersReducer from './playersReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  hand: handReducer,
  hands: handsReducer,
  players: playersReducer,
});

export default rootReducer;
