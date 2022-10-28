import React from 'react';
import Input from '../componentes/input';
import Button from '../componentes/Button';

function LoginPage() {
  return (
    <div>
      <h1>Página de Login</h1>

      <Input
        name="email"
        dataTestId="common_login__input-email"
        type="email"
        // value={ state.email }
        // onChange={ handleChange }
        placeholder="E-mail"
        label="Login"
      />

      <Input
        name="password"
        dataTestId="common_login__input-password"
        type="password"
        // value={ state.email }
        // onChange={ handleChange }
        placeholder="Senha"
        label="Senhas"
      />

      <Button
        textButton="Login"
        dataTestId="button"
      />
      <Button
        textButton="Ainda não tenho conta"
        dataTestId="button"
      />
    </div>
  );
}

export default LoginPage;
