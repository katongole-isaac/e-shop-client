import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import configureStore, { persistor } from "@/store/configureStore";

import ProtectedRoute from "@/components/protectedRoute";
import "@/styles/globals.css";

const store = configureStore();

/**
 * For authenication - we set requireAuth field on a component
 *  e.g Cmp.requireAuth
 */
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Fragment>
          <Toaster />

          {getLayout(
            Component.requireAuth ? (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            ) : (
              <Component {...pageProps} />
            )
          )}
        </React.Fragment>
      </PersistGate>
    </Provider>
  );
}
