import React from 'react';
import css from './style.module.css';

const FriendList = ({ friends }) => {
  const list = friends.map(el => 
    <li className={css.FriendItem} key={el.id}>
      <span className={css.FriendStatus} style={{backgroundColor: el.isOnline ? 'green' : 'red'}}></span>
      <img className={css.FriendAvatar} src={el.avatar} alt="Avatar"/>
      <p className={css.FriendName}>{el.name}</p>
    </li>
  )
  return (
    <ul className={css.FriendList}>
      {list}
    </ul>
  )
};

export default FriendList;