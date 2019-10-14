import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  const rows = items.map(el => 
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  )
  return (
    <table className={css.TransactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

TransactionHistory.defaultProps = {
  items: [],
}

export default TransactionHistory;