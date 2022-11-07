import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../componentes/NavBar';
import SalesList from '../componentes/SalesList';

export default function SaleDetails() {
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
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
        <SalesList
          products={ products }
        />
      </section>
    </main>
  );
}
