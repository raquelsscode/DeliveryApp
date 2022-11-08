import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../componentes/NavBar';
import Table from '../componentes/Table';
import { getOrder } from '../services/API';

export default function OrderDetailsPage() {
  const [user, setUser] = React.useState({});
  const [order, setOrder] = React.useState({
    products: [],
    seller: {
      name: '',
    },
  });
  const navigate = useNavigate();
  const params = useParams();
  const totalPrice = order.products
    .reduce((acc, curr) => acc + (Number(curr.price) * curr.salesProducts.quantity), 0)
    .toFixed(2);

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    getOrder(params.id).then((response) => {
      setOrder(response);
    });
  }, []);

  console.log(order);

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
        <Table
          page="order_details"
          order={ order }
          dataArray={ order.products }
          hasButton={ false }
        />
      </section>

      <section>
        <span>Total:</span>
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          {
            totalPrice.replace(/\./, ',')
          }
        </span>
      </section>

    </main>
  );
}
