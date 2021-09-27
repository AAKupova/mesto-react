import React, { useState } from 'react';

import { Title } from '../Title';
import { Label } from './Label';
import { Input } from './Input';
import { ErrorMsg } from './ErrorMsg';
import { Button } from '../Button';

import './styles.css';

export const Form = ({ data: { title, fileds, button }, onSubmit }) => {
  const [filedsValue, setFiledsValue] = useState({});

  const handlerOnChange = (e) => {
    setFiledsValue({
      ...filedsValue,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit(filedsValue);
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <Title>{title}</Title>
      {fileds.map((field) => (
        <Label key={field.name}>
          <Input {...field} onChange={handlerOnChange} />
          <ErrorMsg />
        </Label>
      ))}
      <Button type="submit" styles="btn-form">
        {button}
      </Button>
    </form>
  );
};
