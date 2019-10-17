import React, { Fragment } from 'react';

import Profile from '../Profile';
import Stats from '../Stats';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

import transactions from '../TransactionHistory/transactions.json'
import friends from '../FriendList/friends.json';
import user from '../Profile/user.json';
import statsInfo from '../Stats/statsInfo';

import './style.module.css';

const App = () => {

  return (
    <Fragment>
      <Profile user={user} />
      <Stats title={statsInfo.title} stats={statsInfo.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}

export default App;
