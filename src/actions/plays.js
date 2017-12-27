import { append, without } from 'ramda';

export const distributeCards = (cards) => {
  if (cards.length < 42) {
    return ({
      type: 'NOT_ENOUGH_CARDS',
    });
  }
  const rCardOne = cards[Math.floor(Math.random() * cards.length)];
  const cardsWithoutRCards = without([rCardOne], cards);
  const rCardTwo = cardsWithoutRCards[Math.floor(Math.random() * cardsWithoutRCards.length)];
  const remainingCards = without([rCardTwo], cardsWithoutRCards);
  let hand = [];
  hand = append(rCardOne, hand);
  hand = append(rCardTwo, hand);

  return ({
    type: 'DISTRIBUTE_CARDS',
    payload: {
      remainingCards,
      hand,
    },
  });
};

export default distributeCards;
