/**
 * Root Reducer
 *
 */

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import productReducer from "./productsReducer";

const reducer = combineReducers({
  auth: userReducer,
  products: productReducer,
});

export default reducer;
