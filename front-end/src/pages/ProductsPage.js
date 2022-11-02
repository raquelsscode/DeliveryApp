import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../componentes/Card';
import NavBar from '../componentes/NavBar';
import { getProducts } from '../services/API';

export default function ProductsPage() {
  const [user, setUser] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(async () => {
    setUser(JSON.parse(localStorage.getItem('user')));

    const response = await getProducts(user.token);
    setProducts(response.map((product) => ({ ...product, quantity: 0 })));
  }, []);

  const productRedirect = () => {
    navigate('/customer/products');
  };

  const ordersRedirect = () => {
    navigate('/orders');
  };

  const addProduct = (index) => {
    const filterProduct = products.find((_item, i) => index === i );
    filterProduct.quantity += 1;
    setPrice((preve) => {
      return (parseFloat(preve) + parseFloat(filterProduct.price)).toFixed(2);
    });
    // localStorage.setItem('car', JSON.stringify([]));
  };

  const rmProduct = (index) => {
    const filterProduct = products[index];
    filterProduct.quantity -= 1;
    setPrice((preve) => {
      return (parseFloat(preve) - parseFloat(filterProduct.price)).toFixed(2);
    });
    // localStorage.setItem('car', JSON.stringify([]));
  };

  const handleChange = ({ target: { value } }, index) => {
    const filterProduct = products[index];
    if (Boolean(value)) {
      filterProduct.quantity = parseInt(value);
      const newPrice = price + Number(filterProduct.quantity * parseFloat(filterProduct.price));
      console.log(newPrice);
      setPrice(newPrice.toFixed(2));
    } else {
      console.log(filterProduct.quantity);
      const newPrice = price - (filterProduct.quantity * parseFloat(filterProduct.price))
      filterProduct.quantity = 0;
      setPrice(newPrice.toFixed(2));
    }
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

      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        {`Ver Carrinho: ${price}`}
      </button>

      {
        products.map((product, index) => (
          <Card
            key={ product.id }
            product={ product }
            addFunction={ () => addProduct(index) }
            rmFunction={ () => rmProduct(index) }
            onChange={ (event) => handleChange(event, index) }
          />
        ))
      }
    </main>
  );
}
