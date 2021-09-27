import React from 'react';

import { Button } from '../Button';

import './styles.css';

export const Popup = ({ show, onclose, children }) => (
  <div className={`popup ${!show ? 'popup_hidden' : ''}`}>
    <div className="popup__container">
      <Button type="button" styles="btn-close" onClick={onclose} />
      {children}
    </div>
  </div>
);
