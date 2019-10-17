import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';
import randomColor from '../helpers/randomColor';

const Stats = ({ title, stats }) => { 
  const statItems = stats.map(el =>
    <li className={css.StatsItem} style={{backgroundColor: randomColor(150)}} key={el.id}>
      <span className={css.StatsLabel}>{el.label}</span>
      <span className={css.StatsPercentage}>{el.percentage + '%'}</span>
    </li>
  );

  return (
    <section className={css.StatsSection}>
      {title && <h2 className={css.StatsTitle}>{title}</h2>}

      <ul className={css.StatsStatList}>
        {statItems}
      </ul>
    </section>
  )
}

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

Stats.defaultProps = {
  title: '',
  stats: [],
}

export default Stats;