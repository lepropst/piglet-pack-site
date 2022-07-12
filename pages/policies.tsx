import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/policies';

export const PolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Policies for Piglet Pack services</title>
        <meta
          name="description"
          content="Policy page for the services rendered by Piglet Pack design based in Fort Worth, Tx."
        ></meta>
        <link rel="canonical" href="https://pigletpack.com/policies" />
      </Head>
      <Layout />
    </>
  );
};
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
export default PolicyPage;
