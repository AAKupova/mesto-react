import React from "react";

import "./styles.css";

export const Button = ({ children, onClick }) => (
  <button type="submit" className="form__button-submit" onClick={onClick}>
    {children}
  </button>
);
