import React from "react";

import { Images } from "./Images";
import { Caption } from "./Caption";

export const Preview = ({ src, alt }) => (
  <div className="preview">
    <div className="preview__body">
      <Images src={src} />
    </div>
    <Caption text={alt} />
  </div>
);
