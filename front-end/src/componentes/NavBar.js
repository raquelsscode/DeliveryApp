import { useNavigate } from 'react-router-dom';
import { string, func } from 'prop-types';

export default function NavBar({
  textButton1,
  button1Click,
  textButton2,
  button2Click,
  nomeUsuario,
}) {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ button1Click }
        >
          { textButton1 }
        </button>

        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ button2Click }
        >
          { textButton2 }
        </button>

        <li
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { nomeUsuario }
        </li>

        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => {
            localStorage.removeItem('user');
            navigate('/');
          } }
        >
          Sair
        </button>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  textButton1: string.isRequired,
  button1Click: func.isRequired,
  textButton2: string.isRequired,
  button2Click: func.isRequired,
  nomeUsuario: string.isRequired,
};
