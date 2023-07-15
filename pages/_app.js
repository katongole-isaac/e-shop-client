import configureStore from "@/store/configureStore";
import "@/styles/globals.css";

import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const store = configureStore();

export default function App({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <React.Fragment>
        <Toaster />
        {getLayout(<Component {...pageProps} />)}
      </React.Fragment>
    </Provider>
  );
}
