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
    error: null,
    success: false,
  },
  reducers: {
    userCreated: (state, action) => {
      state.user = action.payload;
    },
    usernameChanged: (state, action) => {
      state.user.fullname = action.payload;
    },
    usernameChangedFailed: (state, action) => {
      const { error, payload } = action.payload;

      state.user.fullname = payload.originalFullname;
      console.log(error);

      if (error) state.error = error?.error;
    },
    addressAdded: (state, action) => {
      state.success = true;
      state.user.address = action.payload.address;
    },
    loggedOut: (state, action) => {
      localStorage.removeItem("x-auth-token");
    },
    userReqSucceed: (s, a) => {
      s.success = true;
    },
    clearSuccessAndError: (s, a) => {
      s.error = null;
      s.success = false;
    },
    setReqErrors: (state, action) => {
      // not used so far yet
      state.error = action.payload.error?.error;
    },
  },
});

const {
  userCreated,
  usernameChanged,
  usernameChangedFailed,
  clearSuccessAndError,
  userReqSucceed,
  setReqErrors,
  addressAdded,
} = slice.actions;

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

export const unSetUserReqErrors = (dispatch) =>
  dispatch(clearSuccessAndError({}));

export const requestChangeUserName = (dispatch, payload) => {
  // optimistic updates
  // first update the UI if something fails
  // you revert it back to its original state e.g use payload field in the apiCallBegan
  dispatch(usernameChanged(payload.fullname));

  const payloadToBeSent = {
    fullname: payload.fullname,
  };

  dispatch(
    apiActions.apiCallBegan({
      url: config.customersAccountUpdatesEndpoint,
      method: "patch",
      data: payloadToBeSent,
      payload,
      onSuccess: userReqSucceed.type,
      onError: usernameChangedFailed.type,
    })
  );
};

export const requestChangePassword = (dispatch, payload) => {

  dispatch(
    apiActions.apiCallBegan({
      url: config.customersAccountUpdatesEndpoint,
      method: "patch",
      data: payload,
      onSuccess: userReqSucceed.type,
      onError: setReqErrors.type,
    })
  );
};

export const unSetSuccessAndError = (dispatch, { error, success }) => {
  let timerId;
  timerId = setTimeout(() => {
    if (success || error) dispatch(clearSuccessAndError());

    clearTimeout(timerId);
  }, 10000);
};

export const addAddress = (dispatch, payload) => {

  dispatch(
    apiActions.apiCallBegan({
      url: config.customersAccountUpdatesEndpoint,
      method: "put",
      data: payload,
      onSuccess: addressAdded.type,
      onError: setReqErrors.type,
    })
  );
};



// selectors

export const getCurrentUser = () =>
  createSelector(
    (state) => state.user,
    (user) => user
  );

export const getUserReqError = () =>
  createSelector(
    (state) => state.error,
    (er) => er
  );

export const getUserReqSuccess = () =>
  createSelector(
    (state) => state.success,
    (success) => success
  );

  
export const getUserAddress = () =>
  createSelector(
    (state) => state.user,
    (user) => user.address
  );
