import React from 'react';

import { Title } from '../Title';
import { Button } from '../Button';

import './styles.css';

export const PopupConfirm = ({ data, onClick }) => (
  <div className="confirm">
    <Title className="confirm__title">{data.title}</Title>
    <Button type="button" className="button_type_primary" onClick={onClick}>{data.button}</Button>
  </div>
);
