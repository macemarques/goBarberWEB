import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/goBarberLOGO.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Preencha o seu melhor e-mail'),
  password: Yup.string()
    .min(8)
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="goBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Insira seu E-Mail." />
        <Input
          name="password"
          type="password"
          placeholder="Insira sua senha."
        />

        <button type="submit"> Acessar</button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
