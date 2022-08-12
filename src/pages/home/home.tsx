/** @jsxImportSource @emotion/react */
import Banner from './banner';
import Posts from './posts';
import Clients from './cleints';
import CommentSection from './comment-section';
import Layout from 'layout/main-layout';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Posts />
      <Clients />
      <CommentSection />
    </Layout>
  );
};

export default Home;
