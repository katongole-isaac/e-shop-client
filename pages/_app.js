import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";

import configureStore, { persistor } from "@/store/configureStore";

import ProtectedRoute from "@/components/protectedRoute";
import "@/styles/globals.css";
import "swiper/css";
import usePreviousUrl from "@/hooks/usePreviousUrl";


const store = configureStore();

/**
 * For authenication - we set requireAuth field on a component
 *  e.g Cmp.requireAuth
 */
export default function App({ Component, pageProps }) {
 
  const getLayout = Component.getLayout || ((page) => page);

  const previousUrl = usePreviousUrl();

  const _Component = () => (
    <Component {...pageProps} previousUrl={previousUrl} />
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Fragment>
          <Toaster />

          {getLayout(
            Component.requireAuth ? (
              <ProtectedRoute previousUrl={previousUrl}>
               {_Component()}
              </ProtectedRoute>
            ) : (
             _Component()
            )
          )}
        </React.Fragment>
      </PersistGate>
    </Provider>
  );
}
