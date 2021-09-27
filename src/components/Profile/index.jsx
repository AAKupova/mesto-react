import React from 'react';

import { BlockLeft } from './BlockLeft';
import { BlockRight } from './BlockRight';
import { BlockCenter } from './BlockCenter';

import './styles.css';

export const Profile = ({
  avatar,
  text,
  title,
  onCardAdd,
  onEditProfil,
  onChangeAvatar,
}) => (
  <section className="profile">
    <BlockLeft src={avatar} onClick={onChangeAvatar} />
    <BlockCenter title={title} text={text} onEditProfil={onEditProfil} />
    <BlockRight onCardAdd={onCardAdd} />
  </section>
);
