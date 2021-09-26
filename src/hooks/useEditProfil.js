import { useState } from "react";

export const useEditProfil = () => {
  const [showEditProfil, setShowEditProfil] = useState(false);

  const handlerToggleEditProfil = () => {
    setShowEditProfil(!showEditProfil)
  };

  const handlerEditSubmit = (data) => {
    console.log(data)
    setShowEditProfil(!showEditProfil)
  }

  return {
    showEditProfil,
    handlerToggleEditProfil,
    handlerEditSubmit,
  };
};