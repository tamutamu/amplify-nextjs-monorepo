import "../styles/globals.css";
import type { AppProps } from "next/app";
import awsconfig from "../src/aws-exports";

function MyApp({ Component, pageProps }: AppProps) {
  const ss = awsconfig;
  return <Component {...pageProps} />;
}

export default MyApp;
