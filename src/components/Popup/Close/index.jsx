import React from 'react';

import { Button } from '../../Button';

import './styles.css';

export const Close = ({ onClick }) => (
  <Button type="button" className="popup__close" onClick={onClick} />
);
