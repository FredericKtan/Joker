import { append, without } from 'ramda';

export const distributeCards = (cards, numberOfPlayers) => {
  if (numberOfPlayers > 5) {
    return ({
      type: 'TOO_MANY_PLAYERS',
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

export const revealCard = (cards, cardsOnTable) => {
  if (cardsOnTable > 4) {
    return ({
      type: 'TOO_MANY_CARDS',
    });
  }

  const card = cards[Math.floor(Math.random() * cards.length)];
  const remainingCards = without([card], cards);

  return ({
    type: 'REVEAL_CARD',
    payload: {
      remainingCards,
      card,
    },
  });
};
