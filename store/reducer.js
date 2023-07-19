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
    user: {},
  },
  reducers: {
    userCreated: (state, action) => {
      state.user = action.payload;
    },

    loggedOut: (state, action) => {
      localStorage.removeItem("x-auth-token");
    },
  },
});

const { userCreated } = slice.actions;

export default slice.reducer;

/**
 *
 * @info This payload holds params for api.actions* request
 */
// const payload = {
//   url,
//   method,
//   data,
//   onSuccess,
//   onError,
// };

// commands
export const userLoggedIn = (dispatch, payload) =>
  dispatch(userCreated(payload));


// selectors

export const getCurrentUser = () =>
  createSelector(
    (state) => state.user,
    (user) => user
  );

