import React, { ReactNode, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import UpOutlined from "@ant-design/icons/UpOutlined";

import GlobalStyle from "../styles/GlobalStyles";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [showScroll, setShowScroll] = useState(false);
  
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);


  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
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
      <button className="scrollTop p-4 right-8 bottom-8 fixed rounded-full bg-gray-300 hover:bg-gray-200" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}}>
        <UpOutlined />
      </button>
      <Header title={title} />
      <div className="p-4">
        {children}
        <footer className="text-center">
          <hr />
          <span className="text-xs">© 2020 João Witor</span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
