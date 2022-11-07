import PropTypes from 'prop-types';
import React from 'react';
import List from './List';

export default function SalesList({
  products,
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
        </tr>
      </thead>
      <tbody>
        {
          products.map((product, index) => (
            <List
              key={ product.id }
              product={ product }
              index={ index }
            />
          ))
        }
      </tbody>
    </table>
  );
}

SalesList.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};
