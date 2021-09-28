import React from 'react';

import './styles.css';

export const BlockLeft = ({ children, onClick }) => (
  <div className="profile__left" onClick={onClick}>
    {children}
  </div>
);
