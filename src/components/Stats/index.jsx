import React from 'react';
import css from './style.module.css';

const colorFn = (dark) => { 
  const r = Math.random() * (255 - dark),
        g = Math.random() * (255 - dark),
        b = Math.random() * (255 - dark);
  return `rgb(${r},${g},${b})`;
}

const Stats = ({ title, stats }) => { 
  const statItems = stats.map(el =>
    <li className={css.StatsItem} style={{backgroundColor: colorFn(150)}} key={el.id}>
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

export default Stats;