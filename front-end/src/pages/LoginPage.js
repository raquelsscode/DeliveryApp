import React, { useState } from 'react';
import Input from '../componentes/input';
import Button from '../componentes/Button';

function LoginPage() {
  const [state, setState] = useState({ email: '', password: '' });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
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
    const { email, password } = state;
    return emailIsValid(email) && passwordIsValid(password);
  };

  return (
    <div>
      <h1>Página de Login</h1>

      <Input
        name="email"
        dataTestId="common_login__input-email"
        type="email"
        value={ state.email }
        onChange={ handleChange }
        placeholder="E-mail"
        label="Login"
      />

      <Input
        name="password"
        dataTestId="common_login__input-password"
        type="password"
        value={ state.password }
        onChange={ handleChange }
        placeholder="Senha"
        label="Senhas"
      />
      <button
        type="button"
        textButton="Login"
        dataTestId="common_login__button-login"
        disabled={ !loginIsValid() }
      >
        Login
      </button>

      <Button
        textButton="Ainda não tenho conta"
        dataTestId="common_login__button-register"
      />
    </div>
  );
}

export default LoginPage;
