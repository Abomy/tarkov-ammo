import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav/Nav";
import SearchContext from "../context/searchContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [query, updateQuery] = useState("");

  return (
    <>
      <SearchContext.Provider
        value={{ query, onQueryChange: updateQuery, filters: [] }}
      >
        <Nav></Nav>
        <Component {...pageProps} />
      </SearchContext.Provider>
    </>
  );
}

export default MyApp;
