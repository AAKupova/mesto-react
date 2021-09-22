import React from "react";

import { Avatar } from "./Avatar";

import "./styles.css";

export const Left = ({ src }) => (
  <div className="profile__left">
    <Avatar src={src}/>
  </div>
);
