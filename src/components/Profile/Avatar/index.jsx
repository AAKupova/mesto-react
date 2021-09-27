import React from 'react';

import './styles.css';

export const Avatar = ({ src }) => (
  <img className="profile__avatar" src={src} alt="Фото профеля" />
);
