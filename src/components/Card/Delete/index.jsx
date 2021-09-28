import React from 'react';

import { Button } from '../../Button'

import './styles.css';

export const Delete = ({ onClick }) => (
  <Button type="button" className="card__delete" onClick={onClick} />
);
