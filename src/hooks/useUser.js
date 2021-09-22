import { api } from "../utils/api";

export const useUser = () => {
  const getUsers = () => api.getUser();

  return {
    getUsers,
  };
};
