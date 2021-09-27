import React from 'react';

import './styles.css';

export const Button = ({ children, onClick, type, styles }) => (
  <button type={type} className={styles} onClick={onClick}>
    {children}
  </button>
);
