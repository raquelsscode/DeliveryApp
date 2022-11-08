import PropTypes from 'prop-types';
import Button from './Button';

export default function OrderDetailsLine({
  order,
}) {
  return (
    <tr>
      <td>
        { `Pedido ${order.id}` }
      </td>

      <td>
        { `P.Vend: ${order.sellerId}` }
      </td>

      <td>
        { order.date }
      </td>

      <td>
        { order.status }
      </td>

      <td>
        <Button
          textButton="Marcar com entregue"

        />
      </td>
    </tr>
  );
}

OrderDetailsLine.propTypes = {
  order: PropTypes.shape().isRequired,
};
