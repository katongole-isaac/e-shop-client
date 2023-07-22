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

    // payload is custom
    // if u want to get the payload from outside this middleware
    // or response return from the request
    const { url, method, data, onSuccess, onError, onToken, payload } =
      action.payload;

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

      // if the request can't be made
      if (!(error && error.response)) {
        dispatch(actions.apiCallError(payload));
        return dispatch({ type: onError, payload: { error: null, payload  } });
      }

      dispatch(actions.apiCallError(error.response?.data));

      // specific
      if (onError)
        dispatch({
          type: onError,
          payload: { error: error.response?.data, payload },
        });
    }
  };

export default api;
