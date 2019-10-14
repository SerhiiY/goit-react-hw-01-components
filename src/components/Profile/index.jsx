import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Profile = ({user}) => {

  return (
  <div className={css.Profile}>
    <div className={css.ProfileDescription}>
      <img
        src={user.avatar}
        alt="user avatar"
        className={css.ProfileAvatar}
      />
      <p className={css.ProfileName}>{user.name}</p>
      <p className={css.ProfileTag}>{'@' + user.tag}</p>
      <p className={css.ProfileLocation}>{user.location}</p>
    </div>

    <ul className={css.ProfileStats}>
      <li>
        <span className={css.ProfileLabel}>Followers</span>
        <span className={css.ProfileQuantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={css.ProfileLabel}>Views</span>
        <span className={css.ProfileQuantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={css.ProfileLabel}>Likes</span>
        <span className={css.ProfileQuantity}>{user.stats.likes}</span>
      </li>
    </ul>
    </div>
  )
}

Profile.propTypes = {
  user: PropTypes.object,
};

Profile.defaultProps = {
  user: {},
}


export default Profile;