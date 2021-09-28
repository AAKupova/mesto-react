import { useState } from 'react';

export const useConfirm = ({ handlerCardDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [idCard, setIdCard] = useState(0);

  const handlerOpenConfirm = (id) => {
    setShowConfirm(true);
    setIdCard(id);
  };
  const handlerCloseConfirm = () => {
    setShowConfirm(false);
  };

  const handlerConfirmSubmit = () => {
    handlerCloseConfirm()
    handlerCardDelete(idCard);
  };

  return {
    showConfirm,
    handlerOpenConfirm,
    handlerCloseConfirm,
    handlerConfirmSubmit,
  };
};
