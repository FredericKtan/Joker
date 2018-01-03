import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ name }) => (
  <div>
    <p>{ name }</p>
  </div>
);

Player.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Player;
