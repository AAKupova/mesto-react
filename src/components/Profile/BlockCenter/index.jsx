import React from 'react';

import { Title } from '../Title';
import { Button } from '../../Button';
import { Text } from '../Text';

import './styles.css';

export const BlockCenter = ({ title, text, onEditProfil }) => (
  <div className="profile__center">
    <Title>{title}</Title>
    <Button type="button" styles="btn-edit" onClick={onEditProfil} />
    <Text>{text}</Text>
  </div>
);
