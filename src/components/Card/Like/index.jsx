import React from "react";

import "./styles.css";

export const Like = ({ isActive, onClick }) => (
  <button
    type="button"
    className={`card__like ${isActive ? "card__like_active" : ""}`}
    onClick={onClick}
  />
);
