import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import RulesPage from './routes/RulesPage';

const App = () => {
  const styles = {
    view: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
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
    }
  };

  return (
    <div style={{ ...styles.view }}>
      <div style={{ ...styles.header }}>
        <h1 style={{ ...styles.title }}>Joker</h1>
        <ul style={{ ...styles.menu }}>
          <Link style={{ ...styles.menuItem }} to="/">
            <li>Home</li>
          </Link>
          <Link style={{ ...styles.menuItem }} to="/rules">
            <li>Rules</li>
          </Link>
          <Link style={{ ...styles.menuItem }} to="/game">
            <li>Game</li>
          </Link>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />            
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/rules" component={RulesPage} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
