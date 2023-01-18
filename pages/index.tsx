import Layout from '../components/landing';
import { getContent, Items } from '../lib/api';
import Head from 'next/head';
import { useMemo } from 'react';
type Props = {
  section: Items;
};

export const Home = (props: Props) => {
  const section = useMemo(() => props.section, [props.section]);

  return (
    <>
      <Head>
        <title>Home of Piglet Pack, web development and design</title>
        <meta
          name="description"
          content="Home page of Piglet Pack, a web development and design company based in Fort Worth, Tx."
        ></meta>
        <link rel="canonical" href="https://pigletpack.com/" />
      </Head>
      <Layout section={section as { title: string; content: string }} />
    </>
  );
};
export default Home;
export const getStaticProps = async () => {
  let content: Items[] = [];
  const file = '01.md';
  let tmp = await getContent({
    directory: 'landing',
    filename: file,
    fields: ['title', 'content'],
  });

  return {
    props: {
      section: tmp,
    },
  };
};
