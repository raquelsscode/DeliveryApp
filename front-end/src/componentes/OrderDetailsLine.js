import PropTypes from 'prop-types';
import moment from 'moment/moment';
import Button from './Button';

export default function OrderDetailsLine({
  order,
}) {
  return (
    <tr>
      <td
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `Pedido ${order.id}` }
      </td>

      <td
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `P.Vend: ${order.seller.name}` }
      </td>

      <td
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { moment(order.saleDate).utc().format('DD/MM/YYYY') }
      </td>

      <td
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { order.status }
      </td>

      <td>
        <Button
          dataTestId="customer_order_details__button-delivery-check"
          textButton="Marcar com entregue"
          isDisabled
        />
      </td>
    </tr>
  );
}

OrderDetailsLine.propTypes = {
  order: PropTypes.shape().isRequired,
};
