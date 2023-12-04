/**
 * This hook is used to check the
 * current loggedin user.
 *
 */

import { useEffect } from "react";
import helpers from "./helpers";
import { getCurrentUser } from "@/store/userReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

/**
 * checks whether the user loggedin and
 *  redirects to main dashboard 
 * in case a user visit signin or register page and is loggedin 
 * in the current browser 
 */
const useRedirectToDashboard = (url) => {
  const router = useRouter();

  const user = useSelector(getCurrentUser());
  const checkUser = () => {
    if (user && helpers.getUserToken()) {
      // u can redirect to main dashboard
      if(!url) return  router.replace("/");

      router.replace(url);
    }
    return;
  };

  useEffect(() => {
    checkUser();
  }, [user]);
};

export default useRedirectToDashboard;
