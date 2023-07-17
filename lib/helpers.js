/**
 * Helper functions
 *
 */

import http from "@/services/http";
import api from "./api";
import config from "@/config/default.json";

const {
  customersRegisterEndpoint,
  customersCheckEmailEndpoint,
  customersSignInEndpoint,
} = config;

// container
const helpers = {};


helpers.passwordRegexp =
  /^(?=.*?[A-Za-z])(?=.*?[0-9~!#=$%?/@+^&_\-\*\.\\\{\}\(\)\[\]]).{6,}$/;


helpers.registerUser = async (payload) => {
  const { data, errors } = await api.post(customersRegisterEndpoint, payload);

  console.log(errors);
  if (errors.response && Object.keys(errors.response.data).length > 0)
    return errors.response.data.error;

  console.log(data);

  /**
   * @TODO when u setup the store , consider dispatching actions here
   *
   */
  // here u can dispatch action
  // that corresponding to register user
  // and then save the user in the store
};

helpers.checkEmail = async (payload) => {
  const { data, errors } = await api.post(customersCheckEmailEndpoint, payload);

  console.log(errors, data);
  if (errors.response && Object.keys(errors.response.data).length > 0)
    return errors.response.data;
  else return data;
};

helpers.signin = async (payload) => {
  const { errors } = await api.post(customersSignInEndpoint, payload);

  console.log(errors);
  if (errors.response && Object.keys(errors.response.data).length > 0)
    return errors.response.data.error;
};

helpers.getUserToken = () => {
  return localStorage.getItem("x-auth-token");
};

helpers.makeRequest = async ({ method, url, payload, headers = {} }) => {
  let data = {},
    errors = {};
  try {
    const response = await http.request({
      url,
      method,
      data: payload,
      headers,
    });
    data = response.data;
  } catch (error) {
    errors = error;
  }

  return { data, errors };
};

export default helpers;
