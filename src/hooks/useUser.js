import { api } from "../utils/api";

export const useUser = () => {
  const getUsers = () => api.getUser();

  const rewriteUserInfo = (data) => (api.rewriteUserInfo(data));

  const changePhoto = (data) => (api.updatePhoto(data));

  return {
    getUsers,
    rewriteUserInfo,
    changePhoto,
  };
};
