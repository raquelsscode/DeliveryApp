import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../componentes/NavBar';
import Table from '../componentes/Table';

export default function OrderDetailsPage() {
  const [user, setUser] = React.useState({});
  const [order, setOrder] = React.useState({
    products: []
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setOrder({
      "id": 1,
      "sellerId": 2, 
      "totalPrice": 22,
      "deliveryAddress": "rua dos bobos",
      "deliveryNumber": "0",
      "products": [
      {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2.20",
        "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
        "quantity": 3
      }
    ],
      "email": "zebirita@email.com",
      "date": "hoje",
      "status": "Pendente",
    })
  }, []);


  return (
    <main>
      <NavBar
        textButton1="Produtos"
        button1Click={ () => navigate('/customer/products') }
        textButton2="Pedidos"
        button2Click={ () => navigate('/orders') }
        nomeUsuario={ user.name }
      />
      <section>
        <Table
          page='order_details'
          order={ order }
          dataArray={ order.products }
          hasButton={ false }
        />
      </section>
    </main>
  );
}
