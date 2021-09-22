import React from "react";

import "./styles.css";

export const Image = ({ src, alt }) => (
  <img className="card__image" src={src} alt={alt} />
);
