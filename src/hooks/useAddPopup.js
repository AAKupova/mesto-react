import { useState } from "react";

export const useAddPopup = () => {
  const [showPopupAdd, setShowPopupAdd] = useState(false);

  const handlerTogglePopupAdd = () => {
    setShowPopupAdd(!showPopupAdd)
  };

  const handlerSubmit = (data) => {
    console.log(data);
    setShowPopupAdd(!showPopupAdd)
  }

  return {
    showPopupAdd,
    handlerTogglePopupAdd,
    handlerSubmit,
  };
};
