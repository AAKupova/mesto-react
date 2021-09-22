import { useState, useEffect } from "react";

import { useCards } from "./useCards";
import { useUser } from "./useUser";

export const useNormalizeData = () => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
  const { getCards, handlerDelete, handlerLike } = useCards();
  const { getUsers } = useUser();

  const normalizeCards = (user, cards) =>
    cards.map((card) => ({
      id: card._id,
      title: card.name,
      img: card.link,
      likesCount: card.likes.length,
      isMy: user._id === card.owner._id,
      isMyLike: card.likes.some((like) => like._id === user._id),
    }));

  const normalizeUser = (user) => ({
    about: user.about,
    avatar: user.avatar,
    name: user.name,
    id: user._id,
  });

  useEffect(() => {
    Promise.all([getUsers(), getCards()]).then((data) => {
      const [user, cards] = data;

      setCards(normalizeCards(user, cards));
      setUser(normalizeUser(user));
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

  return {
    user,
    cards,
    handlerCardDelete,
    handlerCardLike,
  };
};
