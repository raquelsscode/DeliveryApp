import PropTypes from 'prop-types';
import React from 'react';
import List from './List';

export default function TableList({
  cart,
  onClick,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((product, index) => (
            <List
              key={ product.id }
              product={ product }
              index={ index }
              onClick={ onClick }
            />
          ))
        }
      </tbody>
    </table>
  );
}

TableList.propTypes = {
  cart: PropTypes.arrayOf().isRequired,
  onClick: PropTypes.func.isRequired,
};
