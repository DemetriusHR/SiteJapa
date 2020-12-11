import React, { ReactNode } from "react";
import Head from "next/head";

import GlobalStyle from "../styles/GlobalStyles";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{`${title} - João Witor`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
        rel="stylesheet"
      />
      <link
        rel="manifest"
        href="https://cdn-sites-static.46graus.com/icons/manifest.json?1100"
      />
      <link
        rel="stylesheet"
        media="all"
        type="text/css"
        href="//cdn-sites-static.46graus.com/dist/css/styles.css?1100"
      />
    </Head>
    <GlobalStyle />
    <Header title={title} />
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
