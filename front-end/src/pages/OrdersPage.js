import moment from 'moment';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../componentes/NavBar';
import { getOrders } from '../services/API';

export default function OrdersPage() {
  const [user, setUser] = React.useState({});
  const [orders, setOrders] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    getOrders().then((response) => {
      setOrders(response);
    });
  }, []);

  console.log(orders);

  return (
    <main>
      <NavBar
        textButton1="Produtos"
        button1Click={ () => navigate('/customer/products') }
        textButton2="Meus Pedidos"
        button2Click={ () => navigate('/customer/orders') }
        nomeUsuario={ user.name }
      />

      <section>
        {
          orders.map((order, index) => (
            <Link to={ `/customer/orders/${order.id}` } key={ index }>
              <div style={ { border: '1px solid black' } }>
                <p
                  data-testid={ `customer_orders__element-order-id-${order.id}` }
                >
                  {`Pedido ${order.id}`}
                </p>
                <span
                  data-testid={ `customer_orders__element-delivery-status-${order.id}` }
                >
                  {order.status}
                </span>
                <p
                  data-testid={ `customer_orders__element-order-date-${order.id}` }
                >
                  {moment(order.saleDate).utc().format('DD/MM/YYYY') }
                </p>
                <p
                  data-testid={ `customer_orders__element-card-price-${order.id}` }
                >
                  {order.totalPrice.replace(/\./, ',')}
                </p>
              </div>
            </Link>
          ))
        }
      </section>

    </main>
  );
}
