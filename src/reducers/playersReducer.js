import { append } from 'ramda';

const defaultPlayers = [];

const playersReducer = (state = defaultPlayers, action) => {
  switch (action.type) {
    case 'CREATE_PLAYER':
      return append({
        id: state.length,
        ...action,
      }, state);
    default:
      return state;
  }
};

export default playersReducer;
