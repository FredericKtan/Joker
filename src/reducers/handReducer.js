const defaultHand = [

];

const handReducer = (state = defaultHand, action) => {
  switch (action.type) {
    case 'DISTRIBUTE_CARDS':
      return action.payload.hand;
    default:
      return state;
  }
};

export default handReducer;
