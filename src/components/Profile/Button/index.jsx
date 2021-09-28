import React from 'react';

import { Button as ButtonBlock } from '../../Button';

import './styles.css';

const typeToClassName = {
  add: 'profile__button-add',
  edit: 'profile__button-edit',
};

export const Button = ({ onClick, type }) => (
  <ButtonBlock
    type="button"
    className={`profile__button ${typeToClassName[type]}`}
    onClick={onClick}
  />
);
