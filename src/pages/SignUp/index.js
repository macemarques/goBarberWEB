import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/goBarberLOGO.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Preencha o seu melhor e-mail'),
  password: Yup.string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres.')
    .required('Insira sua senha secreta'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    // console.tron.log(data);
    dispatch(signUpRequest(name, email, password));
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
