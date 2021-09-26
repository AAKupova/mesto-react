import { useState } from "react";

export const useChangeAvatar = () => {
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);

  const handlerToggleChange = () => {
    setShowChangeAvatar(!showChangeAvatar)
  };

  const handlerChangeSubmit = (data) => {
    console.log(data)
    setShowChangeAvatar(!showChangeAvatar)
  }

  return {
    showChangeAvatar,
    handlerToggleChange,
    handlerChangeSubmit,
  };
};