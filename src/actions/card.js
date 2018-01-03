import { append, without } from 'ramda';

export const drawCard = (cards) => {
  if (cards.length < 1) {
    return ({
      type: 'EMPTY_DECK',
    });
  }
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  const remainingCards = without([randomCard], cards);

  return ({
    type: 'DRAW_CARD',
    payload: {
      remainingCards,
      card: randomCard,
    },
  });
};

export const discardCard = (cards, card) => {
  return ({
    type: 'DISCARD_CARD',
    payload: {
      remainingCards: append(card, cards),
      card,
    }
  })
};
