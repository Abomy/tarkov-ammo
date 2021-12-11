import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import SearchContext from "../context/searchContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const search = {
    query: "",
  };

  const [query, updateQuery] = useState("");
  function setQuery(value: string) {
    updateQuery(value);
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
        rel="stylesheet"
      />
      <SearchContext.Provider value={{ query, setQuery }}>
        <Nav></Nav>
        <Component {...pageProps} />
      </SearchContext.Provider>
    </>
  );
}

export default MyApp;
