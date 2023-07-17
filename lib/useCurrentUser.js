/**
 * This hook is used to check the
 * current loggedin user.
 *
 */

import { useEffect } from "react";
import helpers from "./helpers";
import { getCurrentUser } from "@/store/reducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

/**
 * checks whether the user loggedin 
 * and redirects to main dash
 */
const useCurrentUser = () => {
  const router = useRouter();

  const user = useSelector(getCurrentUser());
  const checkUser = () => {
    if (user && helpers.getUserToken()) {
      // u can redirect to main dashboard
      router.replace("/");
    }
    return;
  };

  useEffect(() => {
    checkUser();
  }, [user]);
};

export default useCurrentUser;
