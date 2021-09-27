import { useState, useEffect } from 'react';

export const useConfirm = ({ handlerCardDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [idCard, setIdCard] = useState(0);

  const close = (e) => {
    if (e.keyCode === 27) {
      setShowConfirm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  const handlerToggleConfirm = (id) => {
    setShowConfirm(!showConfirm);
    setIdCard(id);
  };

  const handlerConfirmSubmit = () => {
    setShowConfirm(!showConfirm);
    handlerCardDelete(idCard);
  };

  return {
    showConfirm,
    handlerToggleConfirm,
    handlerConfirmSubmit,
  };
};
