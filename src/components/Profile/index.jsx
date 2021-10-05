import React from 'react';

import { BlockLeft } from './BlockLeft';
import { BlockRight } from './BlockRight';
import { BlockCenter } from './BlockCenter';
import { Button } from './Button';
import { Title } from './Title';
import { Text } from '../Text';
import { Avatar } from './Avatar';

import './styles.css';

export const Profile = ({ avatar, text, title, onCardAdd, onEditProfil, onChangeAvatar, device }) => (
  <section className="profile">
    <BlockLeft onClick={onChangeAvatar}>
      <Avatar src={avatar} />
    </BlockLeft>

    <BlockCenter>
      <Title>{title}</Title>
      <Button onClick={onEditProfil} type="edit" />
      <Text device={device} color='#fff'>{text}</Text>
    </BlockCenter>

    <BlockRight>
      <Button onClick={onCardAdd} type="add" />
    </BlockRight>
  </section>
);
