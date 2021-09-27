import { useState, useEffect } from 'react';
import { useCards } from './useCards';
import { useUser } from './useUser';

export const useNormalizeData = () => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
  const { getCards, handlerDelete, handlerLike, createCard } = useCards();
  const { getUsers, rewriteUserInfo, changePhoto } = useUser();

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
    Promise.all([getUsers(), getCards()]).then((data) => {
      setUser(normalizeUser(data[0]));
      setCards(normalizeCards(user, data[1]));
    });
  }, []);

  const handlerCardDelete = (id) => {
    handlerDelete(id);
    setCards(cards.filter((card) => card.id !== id));
  };

  const handlerCardLike = (id) => {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          handlerLike(id, card.isMyLike);

          if (card.isMyLike) {
            return {
              ...card,
              isMyLike: false,
              likesCount: card.likesCount - 1,
            };
          } else {
            return { ...card, isMyLike: true, likesCount: card.likesCount + 1 };
          }
        }

        return card;
      })
    );
  };

  const handlerAddCard = (data) => {
    createCard(data).then((res) => setCards([...normalizeCards(user, [res]), ...cards]));
  };

  const handlerEdit = (data) => {
    rewriteUserInfo(data).then((res) => setUser(normalizeUser(res)));
  };

  const handlerChangePhoto = (data) => {
    changePhoto(data).then((res) => setUser(normalizeUser(res)));
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
