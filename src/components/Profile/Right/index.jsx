import React from "react";

import { Button } from "./Button";

import "./styles.css";

export const Right = ({ onCardAdd }) => (
  <div className="profile__right">
    <Button onClick={onCardAdd} />
  </div>
);
