import React, { useState, useEffect } from 'react';

import { Title } from '../Title';
import { Label } from './Label';
import { Input } from './Input';
import { ErrorMsg } from './ErrorMsg';
import { Button } from '../Button';

import './styles.css';

export const Form = ({ data: { title, fields, button }, onSubmit, initialValue = {}, show }) => {
  const [filedsValue, setFiledsValue] = useState({});
  const [filedsError, setFiledsError] = useState({});
  const isButtonDisabled =
    Object.keys(filedsError).some((key) => filedsError[key]) ||
    Object.keys(filedsValue).length !== fields.length;

  const handlerOnChange = (e) => {
    setFiledsValue({
      ...filedsValue,
      [e.target.name]: e.target.value,
    });

    setFiledsError({
      ...filedsError,
      [e.target.name]: !e.target.validity.valid ? e.target.validationMessage : '',
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit(filedsValue);
  };

  useEffect(() => {
    const tmp = {};

    fields.forEach((field) => {
      if (initialValue[field.name]) {
        tmp[field.name] = initialValue[field.name];
      }
    });

    setFiledsValue(tmp);
    setFiledsError({});
  }, [show]);

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <Title>{title}</Title>
      {fields.map((field) => (
        <Label key={field.name}>
          <Input
            {...field}
            onChange={handlerOnChange}
            isError={filedsError[field.name]}
            value={filedsValue[field.name] || ''}
          />
          <ErrorMsg>{filedsError[field.name]}</ErrorMsg>
        </Label>
      ))}
      <Button
        type="submit"
        className={isButtonDisabled ? 'button_type_outline' : 'button_type_primary'}
        disabled={isButtonDisabled}
      >
        {button}
      </Button>
    </form>
  );
};
