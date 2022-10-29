import React, { useState } from 'react';
import Input from '../componentes/input';
import Button from '../componentes/Button';
import singIn from '../services/API';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [loged, setLoged] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleClick = async () => {
    try {
      const response = await singIn(user);
      navigate(`/${response.role}/products`);
    } catch (error) {
      setLoged(true);
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
        label="Senhas"
      />

      <Button
        textButton="Ainda não tenho conta"
        dataTestId="common_login__button-login"
        onClick={ handleClick }
        isDisabled={ !loginIsValid() }
      />

      <Button
        textButton="Ainda não tenho conta"
        dataTestId="common_login__button-register"
        onClick={ handleClick }
      />

      { loged ? (
        <p
          data-testid="common_login__element-invalid-email"
        >
          Not implemented
        </p>
      ) : '' }
    </div>
  );
}

export default LoginPage;
