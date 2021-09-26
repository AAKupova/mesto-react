import React from "react";

import "./styles.css";

export const ButtonClose = ({ onclose }) => (
  <button type="button" className="popup__close" onClick={onclose}></button>
);
