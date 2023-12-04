/**
 * Protects pages that require authentication
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import helpers from "@/lib/helpers";
import { getCurrentUser } from "@/store/userReducer";

const ProtectedRoute = ({ children, previousUrl }) => {
  const router = useRouter();

  const currentUser = useSelector(getCurrentUser());
  const token = helpers.getUserToken();

  const isLoggedIn = Object.keys(currentUser).length > 0 && token;

  const signinUrl = `/auth/signin`;
  let redirectUrl ;

  if(previousUrl)
  
    if(!previousUrl.includes('?cb'))
    redirectUrl =  signinUrl + `?cb=${previousUrl}`;

    else redirectUrl = previousUrl;

  else  redirectUrl = signinUrl;

  useEffect(() => {
    if (!isLoggedIn) router.push(redirectUrl);
  }, [currentUser, token]);

  return children;
};

export default ProtectedRoute;
