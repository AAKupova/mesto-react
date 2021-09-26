import React from "react";

import { Left } from "./Left";
import { Right } from "./Right";
import { Center } from "./Center";

import "./styles.css";

export const Profile = ({ avatar, text, title, onOpen, onCardAdd, onEditProfil, onChangeAvatar }) => (
  <section className="profile">
    <Left src={avatar} onClick={onChangeAvatar}/>
    <Center title={title} text={text} onEditProfil={onEditProfil} />
    <Right onCardAdd={onCardAdd} />
  </section>
);
