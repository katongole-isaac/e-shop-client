import configureStore from "@/store/configureStore";
import "@/styles/globals.css";

import { Provider } from "react-redux";

const store = configureStore();

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
