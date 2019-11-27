import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/goBarberLOGO.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('Preencha o seu melhor e-mail.'),
  password: Yup.string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres.')
    .required('A senha é obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    // console.tron.log(data);
    dispatch(signInRequest(email, password));
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

        <button type="submit">{loading ? 'Carregando' : 'Acessar'}</button>

        <Link to="/register">Criar conta gratuita.</Link>
      </Form>
    </>
  );
}
