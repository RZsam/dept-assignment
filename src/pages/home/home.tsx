/** @jsxImportSource @emotion/react */
import Banner from './banner';
import Navbar from 'components/navbar';
import Posts from './posts';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Posts />
    </div>
  );
};

export default Home;
