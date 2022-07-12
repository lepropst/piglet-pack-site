import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/policies';

export const PolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Policy page of Piglet Pack, a web development and design company based in Fort Worth, Tx."
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
