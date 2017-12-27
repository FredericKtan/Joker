import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../components/Card';

import { distributeCards, revealCard } from '../actions/plays';

const renderCards = cards => (
  cards.map(card => (
    <Card key={card.number + card.color} number={card.number} color={card.color} />
  ))
);

class GamePage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleRevealClick = this.handleRevealClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(distributeCards(this.props.cards));
  }

  handleClick() {
    this.props.dispatch(distributeCards(this.props.cards, this.props.hands.length));
  }

  handleRevealClick() {
    this.props.dispatch(revealCard(this.props.cards, this.props.table.length));
  }

  render() {
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

    return (
      <div style={{ ...styles.view }}>
        <h1>Game</h1>
        <div style={{ ...styles.column }}>
          <button onClick={this.handleClick}>Distribute</button>
          <button onClick={this.handleRevealClick}>Reveal</button>
        </div>
        <div style={{ ...styles.column }}>
          <p style={{ ...styles.center }}>
            Table
          </p>
          <p style={{ ...styles.center }}>
            { this.props.table.length } cards
          </p>
          {
            renderCards(this.props.table)
          }
        </div>
        <div style={{ ...styles.column }}>
          <p style={{ ...styles.center }}>
            Deck
          </p>
          <p style={{ ...styles.center }}>
            { this.props.cards.length } cards left
          </p>
          {
            renderCards(this.props.cards)
          }
        </div>
        {
          this.props.hands.map((hand, key) => (
            <div style={{ ...styles.column }}>
              <p style={{ ...styles.center }}>
                Player { key }'s Hand
              </p>
              <p style={{ ...styles.center }}>
                { hand.length } cards
              </p>
              {
                renderCards(hand)
              }
            </div>
          ))
        }
      </div>
    );
  }
}

GamePage.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  hands: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  table: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  hands: state.hands,
  table: state.table,
});

export default connect(mapStateToProps)(GamePage);
