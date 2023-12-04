/**
 * Helper functions
 *
 */

import _ from "lodash";

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


helpers.usernameRegexp =
  /^(?=.{3,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_\s]+(?<![_.])$/;

helpers.stringRegexp = /^[A-Za-z0-9\s\-.,/]{3,60}$/i;
  

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


helpers.startCase = (str) => {
  str = typeof str === "string" ? str : str.toString();

  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
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

helpers.setUserToken = (token) => {
   localStorage.setItem("x-auth-token", token);
};



helpers.makeRequest = async ({ method, url, payload, reqHeaders = {} }) => {
  let data = {},
    errors = {},
    headers = {},
    statusCode = null;

  try {
    const response = await http.request({
      url,
      method,
      data: payload,
      headers: reqHeaders,
    });
    data = response.data;
    statusCode = response.status
    headers = response.headers;
  } catch (error) {
    errors = error;
  }

  return { data, errors, headers , statusCode };
};


helpers.getCountries = async() => {
  const url = "https://restcountries.com/v3.1/all";
 const {data, errors } =  await helpers.makeRequest({
    url,

  });

  if(!(Object.keys(data).length > 0) ) return [];

  return data.map( obj => obj.name.common);
}


helpers.generateNumbers = (start = 0, limit, step = 1) => {
  return _.range(start, limit, step);
};


export default helpers;
