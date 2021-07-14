import { useContext } from "react";
import { UserContext } from "contexts/UserContext";

export const useUser = () => {
  const value = useContext(UserContext);
  return value;
};
