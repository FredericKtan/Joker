import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './components/Card';

import { distributeCards } from './actions/plays';

const renderCards = cards => (
  cards.map(card => (
    <Card key={card.number + card.color} number={card.number} color={card.color} />
  ))
);

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(distributeCards(this.props.cards));
  }

  handleClick() {
    this.props.dispatch(distributeCards(this.props.cards));
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
        <div style={{ ...styles.column }}>
          <button onClick={this.handleClick}>Distribute</button>
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
                { hand.length } cards left
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

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  hands: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  hands: state.hands,
});

export default connect(mapStateToProps)(App);
