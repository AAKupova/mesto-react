import React from "react";

import { ButtonClose } from "./ButtonClose";

import "./styles.css";

export const Popup = ({ show, onclose, children }) => (
  <div className={`popup ${!show ? 'popup_hidden' : ''}`}>
    <div className="popup__container">
      <ButtonClose onclose={onclose} />
      {children}
    </div>
  </div>
);
