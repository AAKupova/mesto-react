import React from 'react';

import './styles.css';

export const Button = ({ onClick }) => (
  <button type="button" className="profile__edit" onClick={onClick} />
);
