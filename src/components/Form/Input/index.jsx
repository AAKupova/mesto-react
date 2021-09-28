import React from 'react';

import './styles.css';

export const Input = ({
  placeholder,
  name,
  value,
  type,
  onChange,
  isError,
  ...props
}) => (
  <input
    className={`form__input ${isError ? 'form__input_type_error' : ''}`}
    value={value}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    required
    {...props}
  />
);
