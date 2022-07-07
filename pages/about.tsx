import Box from "@mui/material/Box";
import { ReactNode, useEffect, useState } from "react";
import { GlobalStyles } from "@mui/material";
import type { NextPage } from "next";
import { MinorityMessage, Profiles, CommonLayout } from "../components/about";
import axios from "axios";
// import Profiles from "./profiles";
import MissionStatement from "../components/common/MissionStatement";
import Image from "next/image";

const Slide = (props: { children: ReactNode; backgroundColor?: string }) => {
  return (
    <Box
      sx={{
        minHeight: window.innerHeight * 0.9,
        scrollSnapAlign: "start",
        scrollSnapMargin: "4rem",
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "inherit",
      }}
    >
      {props.children}
    </Box>
  );
};
const whoWeAre = {
  title: "Who we are",
  text: [
    "We are a service provider focused on web development, management of digital resources, and content management solutions. Situations and needs vary incredibly motivating us to remain flexible. Our services are always fully customizable and are provided with a detailed service plan that is completely dynamic.",

    "Our voice within the disability community and ability to speak up for issues that are visible to us has been a crucial factor in the development of our business practices. Piglet pack is an inclusive and accessible environment which means our lines of communication are always open to discussions regarding accessibility or our history of participation within the disability community and how it has impacted our practices.",

    "Website creation/management, web service management, basic editing, and content manage solution help as well as a plethora of situation based assistance or support services all fall within our ability. Submitting a quote and having a discussion with us is the easiest way to determine the cheapest solution, whether that’s us providing a service or recommending an easy fix we can easily assess your situation and provide actionable solutions. ",

    "See more below…",
  ],
};
const whatWeDo = {
  title: "What We Do",
  text: [
    "Because of our core mission to remain accessible and flexible, we can do anything. Our staff has numerous years of full stack development education and has stayed up to date with the use of microservices and cloud computing services to accomplish a wide variety of tasks. From backend server development in Python, NodeJs, and SQL, to frontend development with and without frameworks, or services are highly extensible.",
    "Content management solutions (CMS) such as Shopify, Wordpresss, Wix, or Foursquare can be difficult to manage or require work that takes extra time. Further, hosting services, content delivery networks, or other online services can provide a hassle that is not necessary when only wanting to focus on content creation and a working website or delivery feed.",

    "We can provide services that simplify the steps of maintaining any sort of online presence. From the above-mentioned services, to creating a custom server, or setting up a self-hosted CMS we can provide a service plan with recommendations and complete transparency on best practices and our plan of work.",
  ],
};
const whyWeDoIt = {
  title: "Why We Do It",
  text: [
    "When asking “why do we do it?”  we remember that we are not only supporting ourselves, but that our work allows us to spread better practices for accessibility on the web and provide such an outward image that we can encourage inclusive and thoughtful business practices in any interaction.",
    "Piglet Pack was created out of the effort of autistic individuals to remain conscious and transparent in our business practices. We strive to provide services that allow us to initiate positive experiences between digital presences and inclusive audiences.",
    "Our work within the online disability community and locally has shown us that there are many disconnects between digital services and client interests. Development practices, technology stacks, or stubborn hosting services often provide complex systems to work with when managing an online presence. Even registering for API services, content management systems, or blogging platforms require additional work that results in overlooked perspectives in the creation of content.",
    "Our main purpose, why we do it, is to make your digital services simple because everyone deserves accessible data. Everyone deserves to manage their online image the way the want with the technology they desire. At the core of any of our services lies a guarantee to help our clients navigate complex situations regarding digital services and provide insight regardless of the monetary outcome of Piglet Pack.",
  ],
};
export const About: NextPage = (props: any) => {
  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        html: { "scroll-snap-type": "y proximity" },
      }}
    />
  );
  const WhoWeAre = () => <CommonLayout {...whoWeAre} />;
  const WhatWeDo = () => <CommonLayout {...whatWeDo} />;
  const WhyWeDoIt = () => <CommonLayout {...whyWeDoIt} />;
  const [image, setImage] = useState<null | string>(null);
  useEffect(() => {
    if (image) {
      console.log(image);
    } else {
      const imageUrl =
        "https://ik.imagekit.io/yuoea5uff/pigletpack/piglet_logo_black_UbMq0qFW88.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653973905844";
      axios.get(imageUrl, { responseType: "blob" }).then(function (response) {
        var reader = new window.FileReader();
        reader.readAsDataURL(response.data);
        reader.onload = function () {
          var imageDataUrl = reader.result;
          if (typeof imageDataUrl !== "string") {
            imageDataUrl = new String(imageDataUrl).toString();
          }
          setImage(imageDataUrl);
        };
      });
    }
  }, [image]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
      }}
    >
      {inputGlobalStyles}
      <MissionStatement minHeight={"60vh"} xOffset={1} transition>
        {image !== null && (
          <Image
            src={image}
            alt="piglet pack logo"
            height="200px"
            width="200px"
          />
        )}
      </MissionStatement>

      <WhoWeAre />

      <WhatWeDo />

      <WhyWeDoIt />

      {/* <Slide>
        <MinorityMessage />
      </Slide> */}
      <Profiles />
    </Box>
  );
};

export default About;
