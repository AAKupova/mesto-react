import { useState, useEffect } from 'react';

export const useAddPopup = ({ handlerAddCard }) => {
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const handlerTogglePopupAdd = () => {
    setShowPopupAdd(!showPopupAdd);
  };

  const close = (e) => {
    if (e.keyCode === 27) {
      setShowPopupAdd(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  const handlerSubmit = (data) => {
    setShowPopupAdd(!showPopupAdd);
    handlerAddCard(data)
  };

  return {
    showPopupAdd,
    handlerTogglePopupAdd,
    handlerSubmit,
  };
};
