import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Profile = ({user}) => {
  const { name, tag, location, stats } = user,
    { followers, views, likes } = stats;
  
  return (
  <div className={css.Profile}>
    <div className={css.ProfileDescription}>
      <img
        src={user.avatar}
        alt="user avatar"
        className={css.ProfileAvatar}
      />
      <p className={css.ProfileName}>{name}</p>
      <p className={css.ProfileTag}>{'@' + tag}</p>
      <p className={css.ProfileLocation}>{location}</p>
    </div>

    <ul className={css.ProfileStats}>
      <li>
        <span className={css.ProfileLabel}>Followers</span>
        <span className={css.ProfileQuantity}>{followers}</span>
      </li>
      <li>
        <span className={css.ProfileLabel}>Views</span>
        <span className={css.ProfileQuantity}>{views}</span>
      </li>
      <li>
        <span className={css.ProfileLabel}>Likes</span>
        <span className={css.ProfileQuantity}>{likes}</span>
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