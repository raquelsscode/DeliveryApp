import React from 'react';
import NavBar from '../componentes/NavBar';
import TableList from '../componentes/TableList';
import { useNavigate } from 'react-router-dom';
import Input from '../componentes/input';
import { getSellers, postOrder } from '../services/API';
import Button from '../componentes/Button';

export default function CheckoutPage() {
  const [user, setUser] = React.useState({});
  const [cart, setCart] = React.useState([]);
  const [sellers, setSellers] = React.useState([]);
  const [selectedSeller, setSelected] = React.useState();
  const [Address, setAddress] = React.useState({
    address: '',
    number: '',
  });
  const totalPrice = cart
    .reduce((acc, curr) => {
      return acc + (Number(curr.price) * curr.quantity)
    }, 0).toFixed(2);
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setCart(JSON.parse(localStorage.getItem('cart')));
    getSellers().then((response) => {
      setSellers(response);
      setSelected(response[0]);
    });
  }, []);

  const rmCart = (ID) => {
    const newCart = cart.filter(({ id }) => id !== ID);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    console.log(sellers);
  };

  const handleChange = ({ target: { name, value } }) => {
    setAddress({ ...Address, [name]: value });
  };

  const postOrderAndNavigate = () => {
    const { email, token } = user;
    const { id } = selectedSeller;
    const { address, number } = Address;
    postOrder(token, {
      sellerId: id,
      totalPrice: parseFloat(totalPrice),
      deliveryAddress: address,
      deliveryNumber: number,
      products: cart,
      email,
    }).then((response) => {
      navigate(`/customer/orders/${response.result}` );
    });
  };


  return (
    <>
      <NavBar
        textButton1='Produtos'
        button1Click={ () => navigate('/customer/products') }
        textButton2='Meus Pedidos'
        button2Click={ () => navigate('/customer/checkout') }
        nomeUsuario={ user.name }
      />
      <section>
        <TableList
          cart={ cart }
          onClick={ rmCart }
        />
      </section>
      <section>
        <span>Total:</span>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {
            totalPrice.replace(/\./, ',')
          }
        </span>
      </section>
      <section>
        <h2>Detalhes e Endereço para Entrega</h2>
        <select
          onClick={ ({target}) => setSelected(sellers[target.value]) }
          data-testid='customer_checkout__select-seller'
          value={ selectedSeller }
        >
          {
            sellers.map((seller, index) => (
              <option
                selected={ index === 0 ? 'selected' : '' }
                key={ seller.id }
                value={ index }
              >
                { seller.name }
              </option>
            ))
          }
        </select>
        <Input
          dataTestId='customer_checkout__input-address'
          label='address'
          name='address'
          onChange={ handleChange }
          placeholder='Rua dos Bobos, Bairro Sei lá'
          type='text'
          value={ Address.address }
        />
        <Input
          dataTestId='customer_checkout__input-address-number'
          label='number'
          name='number'
          onChange={ handleChange }
          placeholder='0000'
          type='text'
          value={ Address.number }
        />

        <Button
          dataTestId='customer_checkout__button-submit-order'
          textButton='Finalizar Pedido'
          isDisabled={ false }
          onClick={ postOrderAndNavigate }
        />
      </section>
    </>
  )
}
