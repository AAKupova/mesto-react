import React from 'react';

import './styles.css';

export const Title = ({ children, className = '' }) => (
  <h2 className={`form__title ${className}`}>{children}</h2>
);
