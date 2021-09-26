import React from "react";

import "./styles.css";

export const Image = ({ src, alt, onOpenPopup }) => {
  return (
    <img
      className="card__image"
      src={src}
      alt={alt}
      onClick={onOpenPopup}
    />
  );
};
