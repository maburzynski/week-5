import Head from "next/head";
import { ReactNode } from "react";
// import {Footer} from './Footer'
// import {Header} from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <Head>
        <title>Test Shop🚨</title>
        <meta name="description" content="Test shop" />
      </Head>
      <div>Header</div>
      <div className="flex-grow">{children}</div>
      {/* <Footer /> */}
      <div>Footer</div>
    </div>
  );
};
