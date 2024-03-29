import { useEffect, useState } from 'react';
import axios from 'axios';
import { getContent } from '../lib/api';
import { Layout } from '../components/about';
import Head from 'next/head';

type Props = {
  MissionStatementContent: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  whoIAm: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  whatIDo: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  whyIDoIt: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  minorityMessage: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };

  eliasProfile: {
    content: string;
  };
};

export const About = (props: Props) => {
  const {
    MissionStatementContent,
    eliasProfile,
    whoIAm,
    whatIDo,
    whyIDoIt,
    minorityMessage,
  } = props;

  const [image, setImage] = useState<null | string>(null);
  useEffect(() => {
    if (image) {
      console.log(image);
    } else {
      const imageUrl =
        'https://ik.imagekit.io/yuoea5uff/pigletpack/piglet_logo_black_UbMq0qFW88.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653973905844';
      axios.get(imageUrl, { responseType: 'blob' }).then(function (response) {
        var reader = new window.FileReader();
        reader.readAsDataURL(response.data);
        reader.onload = function () {
          var imageDataUrl = reader.result;
          if (typeof imageDataUrl !== 'string') {
            imageDataUrl = new String(imageDataUrl).toString();
          }
          setImage(imageDataUrl);
        };
      });
    }
  }, [image]);

  return (
    <>
      <Head>
        <title>Web Development and design by Piglet Pack</title>

        <meta
          name="description"
          content="About page describing Piglet Pack, a web development and design company based in Fort Worth, Tx."
        ></meta>
        <link rel="canonical" href="https://pigletpack.com/about" />
      </Head>
      <Layout
        minorityMessage={minorityMessage}
        image={image}
        whoIAm={whoIAm}
        whatIDo={whatIDo}
        whyIDoIt={whyIDoIt}
        MissionStatementContent={MissionStatementContent}
        eliasProfile={eliasProfile.content}
      />
    </>
  );
};

export default About;
export const getStaticProps = async () => {
  const MissionStatementContent = getContent({
    directory: 'common',
    filename: 'mission-statement.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const whoIAm = getContent({
    directory: 'about',
    filename: 'what-I-do.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const whatIDo = getContent({
    directory: 'about',
    filename: 'who-I-am.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const whyIDoIt = getContent({
    directory: 'about',
    filename: 'why-I-do-it.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const minorityMessage = getContent({
    directory: 'about',
    filename: 'minority-message.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const eliasProfile = getContent({
    directory: 'about',
    filename: 'eliasProfile.md',
    fields: ['content'],
  });

  return {
    props: {
      MissionStatementContent,
      whoIAm,
      whatIDo,
      whyIDoIt,
      minorityMessage,
      eliasProfile,
    },
  };
};
