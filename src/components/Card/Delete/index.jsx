import React from 'react';

import './styles.css';

export const Delete = ({ onClick }) => (
  <button type="button" className="card__delete" onClick={onClick} />
);
