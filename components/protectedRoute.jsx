/**
 * Protects pages that require authentication
 *
 */

import helpers from "@/lib/helpers";
import { getCurrentUser } from "@/store/userReducer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  const currentUser = useSelector(getCurrentUser());
  const token = helpers.getUserToken();

  const isLoggedIn = Object.keys(currentUser).length > 0 && token;
    
  useEffect(() => {
    if (!isLoggedIn) router.push("/auth/signin");
  }, [currentUser, token]);

  return children;
};

export default ProtectedRoute;
