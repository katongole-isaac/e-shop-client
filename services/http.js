/**
 * HTTP Modules
 * For making requests
 *
 */

import axios from "axios";
import toast from "react-hot-toast";

import ErrorAlert from "@/components/common/alerts/error";
import config from "@/config/default.json"; 

// handle unexpected errors => errors that shudn't occur under normal operations e.g (ntwrk down, server down, DB down)
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (expectedError) return Promise.reject(error);

  // unexpected error here
  // you can alert a user
  // log it
  toast.custom((t) => (
    <ErrorAlert
      error={`${error.message} [${error.code}]`}
      classes="bg-white w-[25em]"
      closeBtn={toast.remove}
      toastId={t}
    />
  ));

  console.error(`Logging the Error: `, error);
});

// setting default headers
axios.defaults.baseURL = config.apiEndpoint;
axios.defaults.headers.common["Content-Type"] = "application/json";

// if x-auth-token , set its header
const token =  typeof window !== 'undefined'? localStorage.getItem('x-auth-token'): false;

if (token)
axios.defaults.headers.common["x-auth-token"] = token;

  export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    request: axios.request,
  };
