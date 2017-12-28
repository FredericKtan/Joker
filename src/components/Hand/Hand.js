import React from 'react';
import { insertAll, contains } from 'ramda';

import Card from '../Card';

const styles = {
  view: {
    display: 'flex',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    textAlign: 'center',
  },
};

const renderCards = (cards, cardsOnTable) => (
  cards.map(card => (
    <Card key={card.number + card.color} number={card.number} color={card.color} fromHand={contains(card, cardsOnTable)} />
  ))
);

const Hand = ({ hand, table, playerNumber }) => {
  const cards = insertAll(0, hand, table);

  return (
    <div style={{ ...styles.column }}>
      <p style={{ ...styles.center }}>
        Player { `${playerNumber}'` }s Hand
      </p>
      <p style={{ ...styles.center }}>
        { hand.length } cards
      </p>
      {
        renderCards(cards, table)
      }
    </div>
  );
};

export default Hand;