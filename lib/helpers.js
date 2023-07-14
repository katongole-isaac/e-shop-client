/**
 * Helper functions
 *
 */

import api from "./api";
import config from "@/config/default.json";

const {
  customersRegisterEndpoint,
  customersCheckEmailEndpoint,
  customersSignInEndpoint,
} = config;


// container
const helpers = {};

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
  const { data, errors } = await api.post(customersSignInEndpoint, payload);

  console.log(errors);
  if (errors.response && Object.keys(errors.response.data).length > 0)
    return errors.response.data.error;

  /**
   * @TODO when u setup the store , consider dispatching actions here
   * 
   */
};

export default helpers;
