import { useEffect, useState } from 'react';
import axios from 'axios';
import { getContent } from '../lib/api';
import { Layout } from '../components/about';

type Props = {
  MissionStatementContent: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  whatWeDo: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  whoWeAre: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  whyWeDoIt: {
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
    whoWeAre,
    whatWeDo,
    whyWeDoIt,
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
    <Layout
      minorityMessage={minorityMessage}
      image={image}
      whoWeAre={whoWeAre}
      whatWeDo={whatWeDo}
      whyWeDoIt={whyWeDoIt}
      MissionStatementContent={MissionStatementContent}
      eliasProfile={eliasProfile.content}
    />
  );
};

export default About;
export const getStaticProps = async () => {
  const MissionStatementContent = getContent({
    directory: 'common',
    filename: 'mission-statement.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const whatWeDo = getContent({
    directory: 'about',
    filename: 'what-we-do.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const whoWeAre = getContent({
    directory: 'about',
    filename: 'who-we-are.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const whyWeDoIt = getContent({
    directory: 'about',
    filename: 'why-we-do-it.md',
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
      whatWeDo,
      whoWeAre,
      whyWeDoIt,
      minorityMessage,
      eliasProfile,
    },
  };
};
