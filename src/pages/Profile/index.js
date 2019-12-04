import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    // console.tron.log(data);
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    // console.tron.log(data);
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu melhor E-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input
          name="password"
          type="password"
          placeholder="Nova senha secreta"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha secreta"
        />

        <button type="submit"> Atualizar perfil</button>
      </Form>
      <button type="submit" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
