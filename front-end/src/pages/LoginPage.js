import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../componentes/Input';
import Button from '../componentes/Button';
import { singIn } from '../services/API';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState({
    logged: false,
    message: '',
  });

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
      navigate('/customer/products');
    }
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleClick = async () => {
    try {
      const response = await singIn(user);
      const { name, email, role, token } = response;
      localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
      navigate(`/${response.role}/products`);
    } catch (error) {
      setErrorMessage({
        logged: true,
        message: error.response.statusText,
      });
    }
  };

  const emailIsValid = (email) => {
    // https://ui.dev/validate-email-address-javascript/
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const passwordIsValid = (password) => {
    const minLength = 6;
    return password.length >= minLength;
  };

  const loginIsValid = () => {
    const { email, password } = user;
    return emailIsValid(email) && passwordIsValid(password);
  };

  return (
    <div>
      <h1>Página de Login</h1>

      <Input
        name="email"
        dataTestId="common_login__input-email"
        type="email"
        value={ user.email }
        onChange={ handleChange }
        placeholder="E-mail"
        label="Login"
      />

      <Input
        name="password"
        dataTestId="common_login__input-password"
        type="password"
        value={ user.password }
        onChange={ handleChange }
        placeholder="Senha"
        label="Senha"
      />

      <Button
        textButton="Login"
        dataTestId="common_login__button-login"
        onClick={ handleClick }
        isDisabled={ !loginIsValid() }
      />

      <Button
        textButton="Ainda não tenho conta"
        dataTestId="common_login__button-register"
        onClick={ () => navigate('/register') }
      />

      <p
        hidden={ !errorMessage.logged }
        data-testid="common_login__element-invalid-email"
      >
        { errorMessage.message }
      </p>
    </div>
  );
}

export default LoginPage;
