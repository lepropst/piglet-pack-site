import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/contact/index';

export const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Contact Piglet Pack, a web development and design company based in Fort Worth, Tx."
        ></meta>
        <meta name="robots" content="contact noFollow" />
        <link rel="canonical" href="https://pigletpack.com/contact" />
      </Head>
      <Layout />
    </>
  );
};

export default Contact;
