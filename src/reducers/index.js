import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import handReducer from './handReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  hand: handReducer,
});

export default rootReducer;
