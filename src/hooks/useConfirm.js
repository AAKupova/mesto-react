import { useState } from "react";

export const useConfirm = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handlerToggleConfirm = () => {
    setShowConfirm(!showConfirm)
  };

  const handlerConfirmSubmit = (data) => {
    console.log(data)
    setShowConfirm(!showConfirm)
  }

  return {
    showConfirm,
    handlerToggleConfirm,
    handlerConfirmSubmit,
  };
};