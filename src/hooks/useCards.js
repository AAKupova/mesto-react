import { api } from '../utils/api';

export const useCards = () => {
  const handlerDelete = (id) => {
    api.deleteCard(id);
  };

  const handlerLike = (id, isLike) => {
    if (isLike) {
      api.disLike(id);
    } else {
      api.like(id);
    }
  };

  const getCards = () => api.getCards();

  const createCard = (data) => api.createCard(data);

  return {
    getCards,
    handlerDelete,
    handlerLike,
    createCard,
  };
};
