import NavBar from "./api/NavBar";

export default function App({ Component, pageProps }) {
  return <>
          <NavBar />
          <Component {...pageProps} />
        </>;
}
