import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import handReducer from './handReducer';
import handsReducer from './handsReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  hand: handReducer,
  hands: handsReducer,
  table: tableReducer,
});

export default rootReducer;
