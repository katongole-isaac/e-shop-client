/**
 * HTTP Modules
 * For making requests
 *
 */

import axios from "axios";
import toast from "react-hot-toast";

import Error from "@/components/common/error";
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
    <Error
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

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  request: axios.request
};