import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../componentes/NavBar';
import { getProducts } from '../services/API';

export default function ProductsPage() {
  const [user, setUser] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(async () => {
    setUser(JSON.parse(localStorage.getItem('user')));

    const response = await getProducts(user.token);
    setProducts(response);
  }, []);

  const productRedirect = () => {
    navigate('/customer/products');
  };

  const ordersRedirect = () => {
    navigate('/orders');
  };

  return (
    <main>
      <NavBar
        textButton1="Produtos"
        button1Click={ productRedirect }
        textButton2="Pedidos"
        button2Click={ ordersRedirect }
        nomeUsuario={ user.name }
      />

      {
        products.map((product) => (
          <div
            key={ product.id }
          >
            <p
              data-testid={ `customer_products__element-card-title-${product.id}` }
            >
              { product.name }
            </p>

            <p
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              { product.price.replace(/\./, ',') }
            </p>

            <img
              alt={ product.name }
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.urlImage }
            />

            <button
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              type="button"
            >
              add
            </button>

            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              defaultValue="0"
            />

            <button
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
            >
              remover
            </button>
          </div>
        ))
      }
    </main>
  );
}
