import PropTypes from 'prop-types';
import Button from './Button';

export default function List({
  page,
  product,
  index,
  hasButton,
  onClick,
}) {
  return (
    <tr>
      <td data-testid={ `customer_${page}__element-order-table-item-number-${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `customer_${page}__element-order-table-name-${index}` }>
        { product.name }
      </td>

      <td data-testid={ `customer_${page}__element-order-table-quantity-${index}` }>
        {
          hasButton ? product.quantity : product.salesProducts.quantity 
        }
      </td>

      <td data-testid={ `customer_${page}__element-order-table-unit-price-${index}` }>
        { product.price.replace(/\./, ',') }
      </td>

      <td data-testid={ `customer_${page}__element-order-table-sub-total-${index}` }>
        {
          hasButton ?  (product.price * product.quantity).toFixed(2).replace(/\./, ',') :
          (product.price * product.salesProducts.quantity).toFixed(2).replace(/\./, ',') 
        }
      </td>

      {
        hasButton ? (
          <td>
            <Button
              dataTestId={ `customer_${page}__element-order-table-remove-${index}` }
              textButton="Remover"
              onClick={ () => onClick(product.id) }
            />
          </td>
        ) : ''
      }

    </tr>
  );
}

List.defaultProps = {
  onClick: () => console.log(),
};

List.propTypes = {
  page: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  hasButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
