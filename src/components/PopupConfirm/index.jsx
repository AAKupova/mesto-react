import React from 'react';

import { Title } from '../Title';
import { Button } from '../Button';

import './styles.css';

export const PopupConfirm = ({ data, onClick }) => (
  <div className="confirm">
    <Title>{data.title}</Title>
    <Button type="button" styles="btn-form" onClick={onClick}>{data.button}</Button>
  </div>
);
