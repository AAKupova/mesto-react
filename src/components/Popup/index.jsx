import React, { useEffect, useRef } from 'react';
import reactDom from 'react-dom';

import { Close } from './Close';

import './styles.css';

export const Popup = ({ show, onClose, children }) => {
	const popupRef = useRef(null)
  const handlerClose = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlerClose);
    return () => document.removeEventListener('keydown', handlerClose);
  }, []);

	const handlerOutsideClick = (e) => {
		if (popupRef.current === e.target) {
			onClose()
		}
	}

  return reactDom.createPortal(
    <div className={`popup ${!show ? 'popup_hidden' : ''}`} ref={popupRef} onClick={handlerOutsideClick}>
      <div className="popup__container">
        <Close onClick={onClose} />
        {children}
      </div>
    </div>,
    document.body
  );
};
