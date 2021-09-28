import { useState } from 'react';

export const useAddPopup = ({ handlerAddCard }) => {
  const [showPopupAdd, setShowPopupAdd] = useState(false);

  const handlerOpenPopupAdd = () => {
    setShowPopupAdd(true);
  };
  
  const handlerClosePopupAdd = () => {
    setShowPopupAdd(false);
  };

  const handlerSubmit = (data) => {
    handlerClosePopupAdd();
    handlerAddCard(data);
  };

  return {
    showPopupAdd,
    handlerOpenPopupAdd,
    handlerClosePopupAdd,
    handlerSubmit,
  };
};
