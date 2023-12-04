/**
 * Product Reducer
 *
 */

import { createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";

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
      products.lastFetch = Date.now();
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
export const requestProducts = (dispatch) => {
  dispatch((dispatch, getState) => {
    const { lastFetch } = getState().products;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

    if (diffInMinutes < config.cacheValidForMinutes) return;

    dispatch(
      apiActions.apiCallBegan({
        url: config.productsEndpoint,
        onSuccess: productsReceived.type,
        onStart: productsRequested.type,
        onError: productsRequestedFailed.type,
      })
    );
  });
};

// selector

export const loadProducts = () =>
  createSelector(
    (state) => state.products,
    (products) => products
  );

export const getProductById = (id) =>
  createSelector(
    (state) => state.products,
    (products) => products.list.find((product) => product._id === id)
  );

export const getProductByIds = (ids) =>
  createSelector(
    (state) => state.products,
    (products) => products.list.filter(({ _id }) => ids.includes(_id))
  );

export const getProductFromCart = (cart) => {
  return createSelector(
    (state) => state.products,
    (products) => {
      const result = [];

      cart.forEach((cartItem) => {
        const item = products.list.find(
          (prod) => prod._id === cartItem.productId
        );
        result.push(item);
      });

      return result;
    }
  );
};

export const getProductByCategory = (category) =>
  createSelector(
    (state) => state.products,
    (products) =>
      products.list.filter((product) => product.category === category)
  );

export const getProductsFromDifferentCategory = () =>
  createSelector(
    (state) => new Set(state.products.list.map((prod) => prod.category)),
    (state) => state.products.list,

    (categories, products) => {
      const result = [];

      for (let category of categories)
        result.push(products.find((product) => product.category === category));

      return result;
    }
  );

export const getRandomProducts = (itemLimit = 4) =>
  createSelector(
    (state) => state.products.list,
    (products) => {
      const result = [];
      let randomIndex,
        prevRandomIndex,
        itemCount = 0;

      for (let product of products) {
        if (itemCount === itemLimit) break;

        randomIndex = Math.floor(Math.random() * products.length);

        if (!prevRandomIndex) prevRandomIndex = randomIndex;
        else if (prevRandomIndex === randomIndex) ++randomIndex;


        prevRandomIndex = randomIndex;

        result.push(products[randomIndex]);
        ++itemCount;
      }

      return result;
    }
  );