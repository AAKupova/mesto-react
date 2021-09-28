import { useState } from 'react';

export const useEditProfil = ({ handlerEdit }) => {
  const [showEditProfil, setShowEditProfil] = useState(false);

  const handlerOpenEditProfil = () => {
    setShowEditProfil(true);
  };

  const handlerCloseEditProfil = () => {
    setShowEditProfil(false);
  };

  const handlerEditSubmit = (data) => {
    handlerEdit(data);
    handlerCloseEditProfil();
  };

  return {
    showEditProfil,
    handlerOpenEditProfil,
    handlerCloseEditProfil,
    handlerEditSubmit,
  };
};
