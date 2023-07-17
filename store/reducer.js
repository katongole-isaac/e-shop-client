/**
 * Root reducer for redux store
 *
 */

import { createSlice, createSelector } from "@reduxjs/toolkit";

import * as apiActions from "./api";
import config from "@/config/default.json";

const slice = createSlice({
  name: "user",
  initialState: {
    errors: {},
    user: {},
  },
  reducers: {
    userCreated: (state, action) => {
      state.user = action.payload;
    },

    getToken: (state, action) => {
      // here we store the token
      // in the localStorage
      localStorage.setItem("x-auth-token", action.payload);
    },

    authReqFail: (state, action) => {
      state.errors.error = action.payload?.error;
    },

    clearAuthErrors: (state, action) => {
      state.errors = {};
    },

    loggedOut: (state, action) => {
      localStorage.removeItem("x-auth-token");
    },
  },
});

const { userCreated, authReqFail, getToken, clearAuthErrors } = slice.actions;

export default slice.reducer;

// const payload = {
//   url,
//   method,
//   data,
//   onSuccess,
//   onError,
// };

// commands
export const signIn = (dispatch, payload) => {
  dispatch(
    apiActions.apiCallBegan({
      url: config.customersSignInEndpoint,
      method: "post",
      data: payload,
      onSuccess: userCreated.type,
      onError: authReqFail.type,
      onToken: getToken.type,
    })
  );
};

export const createAccount = (dispatch, payload) => {
  dispatch(
    apiActions.apiCallBegan({
      url: config.customersRegisterEndpoint,
      method: "post",
      data: payload,
      onSuccess: userCreated.type,
      onError: authReqFail.type,
      onToken: getToken.type,
    })
  );
};

// clears errors on sign and register pages
export const clearErrors = (dispatch) => {
  const id = setTimeout(() => {
    dispatch(clearAuthErrors());

    clearTimeout(id);
  }, 5000);
};

// selectors

// gets errors on sign and register pages
export const getErrors = () =>
  createSelector(
    (state) => state.errors.error,
    (error) => error
  );


export const getCurrentUser = () =>
  createSelector(
    (state) => state.user,
    (user) => user
  );

