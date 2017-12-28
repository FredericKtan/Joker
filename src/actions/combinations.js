import { insertAll } from 'ramda';

export const getPlayerCards = (hand, table) => {
  const cards = insertAll(0, hand, table);

  return {
    type: 'MERGE_HAND_AND_TABLE',
    payload: cards,
  };
};

export const checkPair = (hand, table) => {
  if ((hand.length + table.length) < 4) {
    return {
      type: 'NOT_ENOUGH_CARD',
    };
  }

  const cards = insertAll(0, hand, table);

  return {
    type: 'MERGE_HAND_AND_TABLE',
    payload: cards,
  };
};

export const checkDoublePair = (hand, table) => {
  if ((hand.length + table.length) < 4) {
    return {
      type: 'NOT_ENOUGH_CARD',
    };
  }

  const cards = insertAll(0, hand, table);

  return {
    type: 'MERGE_HAND_AND_TABLE',
    payload: cards,
  };
};