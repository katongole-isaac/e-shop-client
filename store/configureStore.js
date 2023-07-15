/**
 * Primary file for Redux store
 * created on Jul 14 2023
 * @author isaac Katongole <katongolelsaac11@gmail.com>
 * 
 */

import { configureStore }  from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/lib/constants";

import reducer from "./reducer";
import api from "./middleware/api";

/**
 * persist* - for persisting redux store
 *
 */

const persistConfigs = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfigs, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([api]),
});

export const persistor = persistStore(store);

export default function () {
  return store;
}