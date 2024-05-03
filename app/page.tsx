import Head from 'next/head';

import HomePage from "./WebsitePages/Home";
import SLPage from "./WebsitePages/SL";
import IconPack from "./WebsitePages/Icons";
import Contact from "./WebsitePages/Contact";
import ComingSoon from "./WebsitePages/ComingSoon";

import Header from "./WebsiteHeaders/Header";
import Footer from "./WebsiteHeaders/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajveer Sodhi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-100">
        <Header />
        {/* <ComingSoon /> */}
        <HomePage />
        <Footer />
      </main>
    </>
  );
}
