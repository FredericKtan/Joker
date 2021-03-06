import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import CombinationsPage from './routes/CombinationsPage';

const App = () => {
  const styles = {
    view: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '20px',
      borderBottom: '1px solid black',
    },
    title: {
      textAlign: 'center',
    },
    menu: {
      listStyle: 'none',
      margin: '0',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuItem: {
      textDecoration: 'none',
      marginLeft: '10px',
      marginRight: '10px',
    },
  };

  return (
    <div style={{ ...styles.view }}>
      <div style={{ ...styles.header }}>
        <h1 style={{ ...styles.title }}>Joker</h1>
        <ul style={{ ...styles.menu }}>
          <Link style={{ ...styles.menuItem }} to="/joker">
            <li>Home</li>
          </Link>
          <Link style={{ ...styles.menuItem }} to="/joker/combinations">
            <li>Combinations</li>
          </Link>
          <Link style={{ ...styles.menuItem }} to="/joker/game">
            <li>Game</li>
          </Link>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path="/joker" component={HomePage} />
          <Route exact path="/joker/game" component={GamePage} />
          <Route exact path="/joker/combinations" component={CombinationsPage} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
