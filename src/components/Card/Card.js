import React from 'react';
import PropTypes from 'prop-types';

import Spade from '../Icons/Spade';
import Diamond from '../Icons/Diamond';
import Club from '../Icons/Club';
import Heart from '../Icons/Heart';

const renderColor = (color) => {
  switch (color) {
    case 'heart':
      return <Heart />;
    case 'spade':
      return <Spade />;
    case 'diamond':
      return <Diamond />;
    case 'club':
      return <Club />;
    default:
      return null;
  }
}

const Card = ({ number, color }) => {
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
      fill: 'red',
    },
  };

  return (
    <div style={{ ...styles.view }}>
      <span style={{ ...styles.numberTopLeft }}>{ number }</span>
      { renderColor(color) }
      <span style={{ ...styles.numberBottomRight }}>{ number }</span>
    </div>
  );
};

Card.propTypes = {
  number: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['heart', 'spade', 'diamond', 'club']).isRequired,
};

export default Card;
