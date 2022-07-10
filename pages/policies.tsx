import type { NextPage } from 'next';
import Layout from '../components/policies';

export const PolicyPage: NextPage = () => {
  return <Layout />;
};
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
export default PolicyPage;
