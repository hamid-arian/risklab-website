import React, { Suspense, useEffect } from "react";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/font-awesome/css/all.min.css";

// custom icons
import "public/glyphter/css/Glyphter.css";

import { Toaster } from "react-hot-toast";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/main.scss";
import type { AppProps } from "next/app";

import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense>
      <Provider store={store}>
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
            style: {
              zIndex: 999999999999,
              fontSize: 14,
              direction: "ltr",
            },
          }}
        />
      </Provider>
    </Suspense>
  );
}
