/**
 * API Middlware
 * For making requests
 *
 */

import http from "@/services/http";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    next(action);

    const { url, method, data, onSuccess, onError, onToken } = action.payload;

    try {
      const response = await http.request({
        url,
        method,
        data,
      });

   
      // general
      dispatch(actions.apiCallSuccess(response.data));

      if (onToken)
        dispatch({ type: onToken, payload: response.headers["x-auth-token"] });

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      
    } catch (error) {
      // general
      dispatch(actions.apiCallError(error.response?.data));

      // specific
      if (onError) dispatch({ type: onError, payload: error.response?.data });
    }
  };

export default api;
