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
    signedIn: (state, action) => {
      
      state.user = action.payload;

    },

    getToken: (state, action) => {
      // here we store the token 
      // in the localStorage
      localStorage.setItem('x-auth-token', action.payload);
    },

    signedInReqFail: (state, action) => {
      state.errors.signin = action.payload.error;
      
    },

    accountCreated: (state, action) => {
      state.user = action.payload;
    },

    loggedOut : (state, action) => {

        localStorage.removeItem('x-auth-token');
    }
  },
});

const { accountCreated, signedIn, signedInReqFail, getToken } = slice.actions;

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
      onSuccess: signedIn.type,
      onError: signedInReqFail.type,
      onToken: getToken.type
    })
  );
};

// selectors
export const getSignErrors = () =>
  createSelector(
    (state) => state.errors.signin,
    (error) => error
  );

export const getCurrentUser = () =>
  createSelector(
    (state) => state.user,
    (user) => user
  );

