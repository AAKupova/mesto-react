import React from 'react';

import './styles.css';

export const Input = ({
  placeholder,
  name,
  value,
  type,
  onChange,
  ...props
}) => (
  <input
    className="form__input"
    value={value}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    required
    {...props}
  />
);
