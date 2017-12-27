import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import handsReducer from './handsReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  hands: handsReducer,
  table: tableReducer,
});

export default rootReducer;
