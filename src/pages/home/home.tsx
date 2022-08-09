/** @jsxImportSource @emotion/react */
import Banner from './banner';
import Navbar from 'components/navbar';
import Posts from './posts';
import Clients from './cleints';
import CommentSection from './comment-section';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Posts />
      <Clients />
      <CommentSection />
    </div>
  );
};

export default Home;
