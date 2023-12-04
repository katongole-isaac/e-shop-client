/**
 * Contains all the logic for shopping cart
 *
 */

import { createSelector, createSlice } from "@reduxjs/toolkit";

/**
 * so the cart should include data in the following order
 *
 * cart = [
 *  {
 *    productId : 1,
 *    quantity: 1
 * }
 *
 * ]
 *
 * then if u want to display items, u can query the products slice.
 *
 */

const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    itemAdded: (cart, action) => {
      cart.list.push(action.payload);
    },
    itemRemoved: (cart, action) => {
      const { productId } = action.payload;

      const index = cart.list.findIndex((item) => item.productId === productId);

      cart.list.splice(index, 1);
    },
    itemQuantityUpdated: (cart, action) => {
      const { productId, quantity } = action.payload;

      const index = cart.list.findIndex((item) => item.productId === productId);

      cart.list[index].quantity = quantity;
    },
  },
});

const { itemAdded, itemRemoved, itemQuantityUpdated } = slice.actions;

export default slice.reducer;

// commands

export const addCartItem = (dispatch, item) => dispatch(itemAdded(item));

export const removeCartItem = (dispatch, itemId) =>
  dispatch(itemRemoved({ productId: itemId }));

export const updateItemQuantity = (dispatch, item) =>
  dispatch(itemQuantityUpdated(item));

// selectors

export const getCartItems = () =>
  createSelector(
    (state) => state.cart,
    (cart) => cart.list
  );

export const getTotalQuantitiesInCart = () =>
  createSelector(
    (state) => state.cart.list,
    (list) => list.reduce((prev, curr) => (prev += curr.quantity), 0)
  );

export const getTotalCheckOut = () =>
  createSelector(
    (state) => state.products.list,
    (state) => state.cart.list,
    (products, cart) =>
      cart.reduce((prev, curr) => {
        const product = products.find(
          (product) => product._id === curr.productId
        );

        const totalCostForProduct = product.price * curr.quantity;

        return (prev += totalCostForProduct);
      }, 0)
  );
