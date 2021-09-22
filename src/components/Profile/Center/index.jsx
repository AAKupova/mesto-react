import React from "react";

import { Title } from "./Title";
import { Button } from "./Button";
import { Text } from "./Text";

import "./styles.css";

export const Center = ({ title, text }) => (
  <div className="profile__center">
    <Title title={title} />
    <Button />
    <Text text={text} />
  </div>
);
