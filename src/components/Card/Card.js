import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ number, color }) => {
  const styles = {
    view: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      height: '100px',
      width: '100px',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'solid 1px black',
      margin: '10px',
      padding: '10px',
      borderRadius: '10%',
    },
    numberTopLeft: {
      position: 'absolute',
      top: '10px',
      left: '10px',
    },
    numberBottomRight: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
    },
    color: {

    },
  };

  return (
    <div style={{ ...styles.view }}>
      <span style={{ ...styles.numberTopLeft }}>{ number }</span>
      <span style={{ ...styles.color }}>{ color }</span>
      <span style={{ ...styles.numberBottomRight }}>{ number }</span>
    </div>
  );
};

Card.propTypes = {
  number: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['hearts', 'spades', 'diamonds', 'clubs']).isRequired,
};

export default Card;
