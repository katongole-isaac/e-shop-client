/**
 * Root Reducer
 *
 */

import { combineReducers } from "@reduxjs/toolkit";

import auth from "./userReducer";
import products from "./productsReducer";
import cart from "./cartReducer";


const reducer = combineReducers({
  auth,
  products,
  cart
});

export default reducer;
