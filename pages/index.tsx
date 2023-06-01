import type { NextPage } from "next";
import Head from "next/head";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./mapComponent"), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MapComponent />
    </>
  );
};

export default Home;
