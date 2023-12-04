/**
 * Used to set the previous url
 * 
 */

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const usePreviousUrl = () => {

  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
     ref.current = router.asPath;
  }, [router]);

  return ref.current;

};

export default usePreviousUrl;
