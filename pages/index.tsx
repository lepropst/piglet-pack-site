import Layout from '../components/landing';
import { getContent, Items } from '../lib/api';
import Head from 'next/head';
import { useMemo } from 'react';
import { readdir } from 'fs';
type Props = {
  sections: Items[];
};

export const Home = (props: Props) => {
  const sections = useMemo(() => props.sections, [props.sections]);

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
      <Layout sections={sections as { title: string; content: string }[]} />
    </>
  );
};
export default Home;
export const getStaticProps = async () => {
  let content: Items[] = [];
  const files = [
    '01.md',
    '02.md',
    '03.md',
    '04.md',
    '05.md',
    '06.md',
    '07.md',
    '08.md',
    '09.md',
  ];
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
    let tmp = await getContent({
      directory: 'landing',
      filename: files[i],
      fields: ['title', 'content'],
    });
    content.push(tmp);
  }
  return {
    props: {
      sections: content,
    },
  };
};
