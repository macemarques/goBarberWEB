import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/goBarberLOGO.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Preencha o seu melhor e-mail'),
  password: Yup.string()
    .min(8, 'No mínimo 8 dígitos')
    .required('Insira sua senha secreta'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="goBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Nome completo." />
        <Input name="email" type="email" placeholder="Insira seu E-Mail." />
        <Input
          name="password"
          type="password"
          placeholder="Insira sua senha."
        />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho cadastro.</Link>
      </Form>
    </>
  );
}
