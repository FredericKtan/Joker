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
  componentWillMount() {
    this.props.dispatch(distributeCards(this.props.cards));
  }

  render() {
    const styles = {
      view: {
        display: 'flex',
      },
    };

    return (
      <div style={{ ...styles.view }}>
        <div>
          {
            renderCards(this.props.cards)
          }
        </div>
        <div>
          {
            renderCards(this.props.hand)
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  hand: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  hand: state.hand,
});

export default connect(mapStateToProps)(App);
