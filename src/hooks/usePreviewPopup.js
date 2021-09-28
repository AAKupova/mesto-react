import { useState } from "react";

export const usePreviewPopup = () => {
  const [previewData, setPreviewData] = useState({});

  const handlerOpenPreview = (data = {}) => {
    previewData.src ? setPreviewData({}) : setPreviewData(data);
  };

  const handlerClosePreview = (data = {}) => {
    setPreviewData({})
  };

  return {
    previewData,
    handlerOpenPreview,
    handlerClosePreview,
  };
};
