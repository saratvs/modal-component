import type { NextPage } from "next";
import Head from "next/head";
import Layout from "./layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
};

export default Home;
