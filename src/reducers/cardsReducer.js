const defaultCards = [
  { number: 1, color: 'club' },
  { number: 1, color: 'diamond' },
  { number: 1, color: 'heart' },
  { number: 1, color: 'spade' },
  { number: 2, color: 'club' },
  { number: 2, color: 'diamond' },
  { number: 2, color: 'heart' },
  { number: 2, color: 'spade' },
  { number: 3, color: 'club' },
  { number: 3, color: 'diamond' },
  { number: 3, color: 'heart' },
  { number: 3, color: 'spade' },
  { number: 4, color: 'club' },
  { number: 4, color: 'diamond' },
  { number: 4, color: 'heart' },
  { number: 4, color: 'spade' },
  { number: 5, color: 'club' },
  { number: 5, color: 'diamond' },
  { number: 5, color: 'heart' },
  { number: 5, color: 'spade' },
  { number: 6, color: 'club' },
  { number: 6, color: 'diamond' },
  { number: 6, color: 'heart' },
  { number: 6, color: 'spade' },
  { number: 7, color: 'club' },
  { number: 7, color: 'diamond' },
  { number: 7, color: 'heart' },
  { number: 7, color: 'spade' },
  { number: 8, color: 'club' },
  { number: 8, color: 'diamond' },
  { number: 8, color: 'heart' },
  { number: 8, color: 'spade' },
  { number: 9, color: 'club' },
  { number: 9, color: 'diamond' },
  { number: 9, color: 'heart' },
  { number: 9, color: 'spade' },
  { number: 10, color: 'club' },
  { number: 10, color: 'diamond' },
  { number: 10, color: 'heart' },
  { number: 10, color: 'spade' },
  { number: 11, color: 'club' },
  { number: 11, color: 'diamond' },
  { number: 11, color: 'heart' },
  { number: 11, color: 'spade' },
  { number: 12, color: 'club' },
  { number: 12, color: 'diamond' },
  { number: 12, color: 'heart' },
  { number: 12, color: 'spade' },
  { number: 13, color: 'club' },
  { number: 13, color: 'diamond' },
  { number: 13, color: 'heart' },
  { number: 13, color: 'spade' },
];

const cardsReducer = (state = defaultCards, action) => {
  switch (action.type) {
    case 'READ_MESSAGE':
      return state;
    case 'DISTRIBUTE_CARDS':
      return action.payload.remainingCards;
    case 'REVEAL_CARD':
      return action.payload.remainingCards;
    default:
      return state;
  }
};

export default cardsReducer;
