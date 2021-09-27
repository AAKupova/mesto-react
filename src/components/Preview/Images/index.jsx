import React from 'react';

import './styles.css';

export const Images = ({ src }) => (
  <img className="preview__image" alt="Картинка" src={src} />
);
