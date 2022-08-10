/** @jsxImportSource @emotion/react */
import Banner from './banner';
import Navbar from 'components/navbar';
import Posts from './posts';
import Clients from './cleints';
import CommentSection from './comment-section';
import Footer from './footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Posts />
      <Clients />
      <CommentSection />
      <Footer />
    </div>
  );
};

export default Home;
