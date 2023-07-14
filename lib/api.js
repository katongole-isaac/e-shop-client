/**
 * Auth methods
 *
 */
import http from "@/services/http";

const api = {};


api.post = async (url, payload, headers = {}) => {

  url = typeof url === "string" && !!url ? url : false;

  payload =
    typeof payload === "object" && Object.keys(payload).length > 0
      ? payload
      : false;

  headers = headers && typeof headers === "object" ? headers : {};

  if (!(payload && url)) return;

  let data = {},
    errors = {};

  try {

    const { data: results } = await http.post(url, payload, { headers });

    data = results;
  } catch (error) {

    errors = { ...error };

  }

  return {
    data,
    errors,
  };
};

export default api;
