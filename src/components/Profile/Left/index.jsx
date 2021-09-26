import React from 'react';

import { Avatar } from './Avatar';

import './styles.css';

export const Left = ({ src, onClick }) => (
  <div className="profile__left" onClick={onClick}>
    <Avatar src={src} />
  </div>
);
