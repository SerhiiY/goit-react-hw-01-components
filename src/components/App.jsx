import React, { Fragment } from 'react';

import Profile from './Profile';
import Stats from './Stats';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import transactions from './transactions.json'
import friends from './friends.json';
import user from './user.json';
import statsInfo from './statsInfo'
import './App.module.css';




class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Profile user={user} />
        <Stats title={statsInfo.title} stats={statsInfo.stats} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Fragment>
    );
  }
}

export default App;
