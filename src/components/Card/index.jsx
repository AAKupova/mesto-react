import { React } from 'react';

import { ContainerLike } from './ContainerLike';
import { Delete } from './Delete';
import { Footer } from './Footer';
import { Image } from './Image';
import { Like } from './Like';
import { LikeCounter } from './LikeCounter';
import { Title } from './Title';

import './styles.css';

export const Card = ({
  id,
  title,
  img,
  likesCount,
  isMy,
  isMyLike,
  onDelete,
  onLike,
  onOpenPopup,
  onConfirm,
}) => {
  const handlerDelete = (e) => {
    onConfirm(id, e);
  };

  const handlerLike = () => {
    onLike(id);
  };

  const hendlerOpenPreview = () => {
    onOpenPopup({ src: img, alt: title });
  };

  return (
    <li className="card">
      {isMy && <Delete onClick={handlerDelete} />}
      <Image src={img} alt={title} onOpenPopup={hendlerOpenPreview} />
      <Footer>
        <Title>{title}</Title>
        <ContainerLike>
          <Like isActive={isMyLike} onClick={handlerLike} />
          <LikeCounter>{likesCount}</LikeCounter>
        </ContainerLike>
      </Footer>
    </li>
  );
};
