import React from 'react';
import { GlobalStyles } from '@/styles/global.styles';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};
