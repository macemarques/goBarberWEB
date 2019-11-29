import React, { useState } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

const { defaultValue, registerField } = useField();

const [preview, setPreview] = useState();

export default function AvatarInput() {
  function handleChange(e) {}
  return (
    <Container>
      <label htmlFor="avatar">
        <img src="" alt="" />
        <input
          id="avatar"
          type="text"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
