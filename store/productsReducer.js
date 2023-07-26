/**
 * Product Reducer
 *
 */

import { createSelector, createSlice } from "@reduxjs/toolkit";

import * as apiActions from "./api";
import config from "@/config/default.json";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
    },
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsRequestedFailed: (products, action) => {
      products.loading = false;
    },
  },
});

const { productsReceived, productsRequested, productsRequestedFailed } =
  slice.actions;

export default slice.reducer;

// commands
export const requestProducts = (dispatch) =>
  dispatch(
    apiActions.apiCallBegan({
      url: config.productsEndpoint,
      onSuccess: productsReceived.type,
      onStart: productsRequested.type,
      onError: productsRequestedFailed.type,
    })
  );

// selector

export const loadProducts = () =>
  createSelector(
    (state) => state.products,
    (products) => products
  );
