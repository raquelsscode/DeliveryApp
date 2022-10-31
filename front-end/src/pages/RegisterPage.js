import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../componentes/input';
import Button from '../componentes/Button';
import register from '../services/API';

function RegisterPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [loged, setLoged] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleClick = async () => {
    try {
      const response = await register(user);
      navigate(`/${response.role}/products`);
    } catch (error) {
      setLoged(true);
    }
  };

  const nameIsValid = (name) => {
    const maxLength = 12;
    return name.length > maxLength;
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

  const registerIsValid = () => {
    const { name, email, password } = user;
    return nameIsValid(name) && emailIsValid(email) && passwordIsValid(password);
  };

  return (
    <div>
      <h1>Cadastro</h1>

      <Input
        name="name"
        dataTestId="common_register__input-name"
        type="text"
        value={ user.name }
        onChange={ handleChange }
        placeholder="Nome"
        label="Nome"
      />

      <Input
        name="email"
        dataTestId="common_register__input-email"
        type="email"
        value={ user.email }
        onChange={ handleChange }
        placeholder="E-mail"
        label="E-mail"
      />

      <Input
        name="password"
        dataTestId="common_register__input-password"
        type="password"
        value={ user.password }
        onChange={ handleChange }
        placeholder="Senha"
        label="Senha"
      />

      <Button
        textButton="Cadastrar"
        dataTestId="common_register__button-register"
        onClick={ handleClick }
        isDisabled={ !registerIsValid() }
      />
      { loged ? (
        <p
          data-testid="common_register__element-invalid_register"
        >
          User Already Exist
        </p>
      ) : '' }
    </div>
  );
}

export default RegisterPage;
