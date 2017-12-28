import React from 'react';

import UIHorizontalLayout from '../components/UI/UIHorizontalLayout';
import UIVerticalLayout from '../components/UI/UIVerticalLayout';
import Card from '../components/Card';

const styles = {
  view: {

  },
  header: {

  },
  textCentered: {
    textAlign: 'center',
  },
  body: {

  },
};

const CombinationsPage = () => (
  <div style={{ ...styles.view }}>
    <header style={{ ...styles.header }}>
      <h1 style={{ ...styles.textCentered }}>Combinations</h1>
    </header>
    <UIVerticalLayout>
      <div>
        <h2 style={{ ...styles.textCentered }}>One pair</h2>
        <UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <p style={{ ...styles.textCentered }}>
              A list of cards with two cards with the same number
            </p>
          </UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <Card number={4} color="heart" isCombination />
            <Card number={4} color="spade" isCombination />
            <Card number={1} color="diamond" />
            <Card number={3} color="heart" />
            <Card number={8} color="club" />
          </UIHorizontalLayout>
        </UIHorizontalLayout>
      </div>
      <div>
        <h2 style={{ ...styles.textCentered }}>Two pairs</h2>
        <UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <p style={{ ...styles.textCentered }}>
              A list of cards with two cards with the same number
              and another cards with the same number but different from the first pair
            </p>
          </UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <Card number={4} color="heart" isCombination />
            <Card number={4} color="spade" isCombination />
            <Card number={7} color="diamond" isCombination />
            <Card number={7} color="heart" isCombination />
            <Card number={8} color="club" />
          </UIHorizontalLayout>
        </UIHorizontalLayout>
      </div>
      <div>
        <h2 style={{ ...styles.textCentered }}>Three of a kind</h2>
        <UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <p style={{ ...styles.textCentered }}>
              A list of cards with three cards with the same number
            </p>
          </UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <Card number={4} color="heart" isCombination />
            <Card number={4} color="spade" isCombination />
            <Card number={7} color="heart" />
            <Card number={4} color="diamond" isCombination />
            <Card number={8} color="club" />
          </UIHorizontalLayout>
        </UIHorizontalLayout>
      </div>
      <div>
        <h2 style={{ ...styles.textCentered }}>More to come...</h2>
        <UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <p style={{ ...styles.textCentered }}>
              Mysterious combination
            </p>
          </UIHorizontalLayout>
          <UIHorizontalLayout centered ratio={2}>
            <Card number={0} color="heart" />
            <Card number={0} color="spade" />
            <Card number={0} color="diamond" />
            <Card number={0} color="heart" />
            <Card number={0} color="club" />
          </UIHorizontalLayout>
        </UIHorizontalLayout>
      </div>
    </UIVerticalLayout>
  </div>
);

export default CombinationsPage;
