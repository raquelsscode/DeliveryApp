import PropTypes from 'prop-types';
import Button from './Button';

export default function List({
  product,
  index,
  onClick,
}) {
  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { product.name }
      </td>

      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { product.quantity }
      </td>

      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        { product.price.replace(/\./, ',') }
      </td>

      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        { (product.price * product.quantity).toFixed(2).replace(/\./, ',') }
      </td>
      
      <td>
        <Button
          dataTestId={ `customer_checkout__element-order-table-remove-${index}` }
          textButton="Remover"
          onClick={ () => onClick(product.id) }
        />
      </td>
    </tr>
  );
}

List.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
