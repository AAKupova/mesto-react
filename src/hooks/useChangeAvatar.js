import { useState } from 'react';

export const useChangeAvatar = ({ handlerChangePhoto }) => {
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);

  const handlerOpenChange = () => {
    setShowChangeAvatar(true);
  };

  const handlerCloseChange = () => {
    setShowChangeAvatar(false);
  };

  const handlerChangeSubmit = (data) => {
    handlerCloseChange();
    handlerChangePhoto(data);
  };

  return {
    showChangeAvatar,
    handlerOpenChange,
    handlerCloseChange,
    handlerChangeSubmit,
  };
};
