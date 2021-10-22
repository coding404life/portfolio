import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="col-span-12 p-4 lg:col-span-9 rounded-2xl">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
