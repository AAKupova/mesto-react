import React from 'react';

import { Button } from '../../Button';

import './styles.css';

export const BlockRight = ({ onCardAdd }) => (
  <div className="profile__right">
    <Button type="button" styles="btn-add" onClick={onCardAdd} />
  </div>
);
