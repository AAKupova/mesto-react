import React from "react";

import { Left } from "./Left";
import { Right } from "./Right";
import { Center } from "./Center";

import "./styles.css";

export const Profile = ({ avatar, text, title }) => (
  <section className="profile">
    <Left src={avatar} />
    <Center title={title} text={text} />
    <Right />
  </section>
);
