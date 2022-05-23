import React from "react";
import App from "./App";
import GithubProvider from "./providers/github-provider";
import GlobalStyle from "./global/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./global/themes";

const Providers = () => {
  return (
    <main>
      <ThemeProvider theme={
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: light)').matches
          ? lightTheme
          : darkTheme
      }>
        <GithubProvider>
          <GlobalStyle />
          <App />
        </GithubProvider>
      </ThemeProvider>
    </main>
  );
};

export default Providers;
