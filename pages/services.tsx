import { Box, List, ListItem, Typography } from '@mui/material';
import Layout from '../components/services';
import { ReactNode } from 'react';
import type { NextPage } from 'next';
import { getContent } from '../lib/api';

type Props = {
  project_service_01: { title: string; price: string; content: string };
  project_service_02: { title: string; price: string; content: string };
  project_service_03: { title: string; price: string; content: string };
  project_service_04: { title: string; price: string; content: string };
  server_service_01: { title: string; price: string; content: string };
  server_service_02: { title: string; price: string; content: string };
  server_service_03: { title: string; price: string; content: string };
  website_service_01: { title: string; price: string; content: string };
  website_service_02: { title: string; price: string; content: string };
  website_service_03: { title: string; price: string; content: string };
};

export const Services = (props: Props) => {
  return (
    <Layout
      serverServices={[
        props.server_service_01,
        props.server_service_02,
        props.server_service_03,
      ]}
      websiteServices={[
        props.website_service_01,
        props.website_service_02,
        props.website_service_03,
      ]}
      projectServices={[
        props.project_service_01,
        props.project_service_02,
        props.project_service_03,
        props.project_service_04,
      ]}
    />
  );
};
export const getStaticProps = async () => {
  const project_service_01 = getContent({
    directory: 'services',
    filename: 'project-service-01.md',
    fields: ['price', 'content', 'title'],
  });
  const project_service_02 = getContent({
    directory: 'services',
    filename: 'project-service-02.md',
    fields: ['price', 'content', 'title'],
  });
  const project_service_03 = getContent({
    directory: 'services',
    filename: 'project-service-03.md',
    fields: ['price', 'content', 'title'],
  });
  const project_service_04 = getContent({
    directory: 'services',
    filename: 'project-service-04.md',
    fields: ['price', 'content', 'title'],
  });
  const server_service_01 = getContent({
    directory: 'services',
    filename: 'server-service-01.md',
    fields: ['price', 'content', 'title'],
  });
  const server_service_02 = getContent({
    directory: 'services',
    filename: 'server-service-02.md',
    fields: ['price', 'content', 'title'],
  });
  const server_service_03 = getContent({
    directory: 'services',
    filename: 'server-service-03.md',
    fields: ['price', 'content', 'title'],
  });
  const website_service_01 = getContent({
    directory: 'services',
    filename: 'website-service-01.md',
    fields: ['title', 'price', 'content'],
  });
  const website_service_02 = getContent({
    directory: 'services',
    filename: 'website-service-02.md',
    fields: ['title', 'price', 'content'],
  });
  const website_service_03 = getContent({
    directory: 'services',
    filename: 'website-service-03.md',
    fields: ['title', 'price', 'content'],
  });
  return {
    props: {
      project_service_01,
      project_service_02,
      project_service_03,
      project_service_04,
      server_service_01,
      server_service_02,
      server_service_03,
      website_service_01,
      website_service_02,
      website_service_03,
    },
  };
};

export default Services;
