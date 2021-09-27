import { useState, useEffect } from 'react';

export const useEditProfil = ({ handlerEdit }) => {
  const [showEditProfil, setShowEditProfil] = useState(false);

  const close = (e) => {
    if (e.keyCode === 27) {
      setShowEditProfil(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  const handlerToggleEditProfil = () => {
    setShowEditProfil(!showEditProfil);
  };

  const handlerEditSubmit = (data) => {
    handlerEdit(data);
    setShowEditProfil(!showEditProfil);
  };

  return {
    showEditProfil,
    handlerToggleEditProfil,
    handlerEditSubmit,
  };
};
