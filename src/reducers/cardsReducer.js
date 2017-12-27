const defaultCards = [
  { number: 1, color: 'clubs' },
  { number: 1, color: 'diamonds' },
  { number: 1, color: 'hearts' },
  { number: 1, color: 'spades' },
  { number: 2, color: 'clubs' },
  { number: 2, color: 'diamonds' },
  { number: 2, color: 'hearts' },
  { number: 2, color: 'spades' },
  { number: 3, color: 'clubs' },
  { number: 3, color: 'diamonds' },
  { number: 3, color: 'hearts' },
  { number: 3, color: 'spades' },
  { number: 4, color: 'clubs' },
  { number: 4, color: 'diamonds' },
  { number: 4, color: 'hearts' },
  { number: 4, color: 'spades' },
  { number: 5, color: 'clubs' },
  { number: 5, color: 'diamonds' },
  { number: 5, color: 'hearts' },
  { number: 5, color: 'spades' },
  { number: 6, color: 'clubs' },
  { number: 6, color: 'diamonds' },
  { number: 6, color: 'hearts' },
  { number: 6, color: 'spades' },
  { number: 7, color: 'clubs' },
  { number: 7, color: 'diamonds' },
  { number: 7, color: 'hearts' },
  { number: 7, color: 'spades' },
  { number: 8, color: 'clubs' },
  { number: 8, color: 'diamonds' },
  { number: 8, color: 'hearts' },
  { number: 8, color: 'spades' },
  { number: 9, color: 'clubs' },
  { number: 9, color: 'diamonds' },
  { number: 9, color: 'hearts' },
  { number: 9, color: 'spades' },
  { number: 10, color: 'clubs' },
  { number: 10, color: 'diamonds' },
  { number: 10, color: 'hearts' },
  { number: 10, color: 'spades' },
  { number: 11, color: 'clubs' },
  { number: 11, color: 'diamonds' },
  { number: 11, color: 'hearts' },
  { number: 11, color: 'spades' },
  { number: 12, color: 'clubs' },
  { number: 12, color: 'diamonds' },
  { number: 12, color: 'hearts' },
  { number: 12, color: 'spades' },
  { number: 13, color: 'clubs' },
  { number: 13, color: 'diamonds' },
  { number: 13, color: 'hearts' },
  { number: 13, color: 'spades' },
];

const cardsReducer = (state = defaultCards, action) => {
  switch (action.type) {
    case 'READ_MESSAGE':
      return state;
    case 'DISTRIBUTE_CARDS':
      return action.payload.remainingCards;
    default:
      return state;
  }
};

export default cardsReducer;
