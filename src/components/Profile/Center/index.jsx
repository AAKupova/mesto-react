import React from "react";

import { Title } from "./Title";
import { Button } from "./Button";
import { Text } from "./Text";

import "./styles.css";

export const Center = ({ title, text, onEditProfil }) => (
  <div className="profile__center">
    <Title title={title} />
    <Button onClick={onEditProfil}/>
    <Text text={text} />
  </div>
);
