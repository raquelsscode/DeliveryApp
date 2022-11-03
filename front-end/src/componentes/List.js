import PropTypes from 'prop-types';
import Button from './Button';

export default function List() {
  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        { index + 1 }

        <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
          { order.name}
        </td>

        <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
          { order.quantity }
        </td>

        <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
          { price }
        </td>

        <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
          { total }
        </td>
      </td>
      <Button
        dataTestId={ `custom_checkout__element-order-table-remove-${index}` }
        textButton="Remover"
        onClick=""
      />
    </tr>
  );
}

List.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
  // index: PropTypes.number.isRequired,
};
