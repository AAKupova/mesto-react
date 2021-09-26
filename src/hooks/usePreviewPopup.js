import { useState } from "react";

export const usePreviewPopup = () => {
  const [previewData, setPreviewData] = useState({});

  const handlerTogglePreview = (data) => {
    previewData.src ? setPreviewData({}) : setPreviewData(data);
  };

  return {
    previewData,
    handlerTogglePreview,
  };
};
