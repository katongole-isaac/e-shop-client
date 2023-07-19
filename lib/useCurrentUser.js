/**
 * Hook used to return current logged in user
 * 
 */

import { getCurrentUser } from "@/store/reducer";
import { useSelector } from "react-redux";
import helpers from "./helpers";


const useCurrentUser = () => {
  const user = useSelector(getCurrentUser());

  const isLoggedIn = helpers.getUserToken() && Object.keys(user).length > 0;

  return {
    user,
    isLoggedIn,
  };
};

export default useCurrentUser;