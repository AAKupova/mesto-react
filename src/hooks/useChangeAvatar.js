import { useState, useEffect } from 'react';

export const useChangeAvatar = ({ handlerChangePhoto }) => {
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);

  const close = (e) => {
    if (e.keyCode === 27) {
      setShowChangeAvatar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);


  const handlerToggleChange = () => {
    setShowChangeAvatar(!showChangeAvatar);
  };

  const handlerChangeSubmit = (data) => {
    setShowChangeAvatar(!showChangeAvatar);
    handlerChangePhoto(data);
  };

  return {
    showChangeAvatar,
    handlerToggleChange,
    handlerChangeSubmit,
  };
};
