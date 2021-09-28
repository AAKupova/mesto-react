import { useState, useEffect } from 'react';
import { api } from '../utils/api';

export const useApi = () => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);

  const normalizeCards = (user, cards) =>
    cards.map((card) => ({
      id: card._id,
      title: card.name,
      img: card.link,
      likesCount: card.likes.length,
      isMy: user.id === card.owner._id,
      isMyLike: card.likes.some((like) => like._id === user.id),
    }));

  const normalizeUser = (user) => ({
    about: user.about,
    avatar: user.avatar,
    name: user.name,
    id: user._id,
  });

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()]).then((data) => {
      const normalizedUser = normalizeUser(data[0]);
      setUser(normalizedUser);
      setCards(normalizeCards(normalizedUser, data[1]));
    });
  }, []);

  const handlerCardDelete = (id) => {
    api.deleteCard(id);
    setCards(cards.filter((card) => card.id !== id));
  };

  const handlerCardLike = (id) => {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          if (card.isMyLike) {
            api.disLike(id);

            return {
              ...card,
              isMyLike: false,
              likesCount: card.likesCount - 1,
            };
          } else {
            api.like(id);

            return { ...card, isMyLike: true, likesCount: card.likesCount + 1 };
          }
        }

        return card;
      })
    );
  };

  const handlerAddCard = (data) => {
    api.createCard(data).then((res) => setCards([...normalizeCards(user, [res]), ...cards]));
  };

  const handlerEdit = (data) => {
    api.rewriteUserInfo(data).then((res) => setUser(normalizeUser(res)));
  };

  const handlerChangePhoto = (data) => {
    api.updatePhoto(data).then((res) => setUser(normalizeUser(res)));
  };

  return {
    user,
    cards,
    handlerCardDelete,
    handlerCardLike,
    handlerAddCard,
    handlerEdit,
    handlerChangePhoto,
  };
};
