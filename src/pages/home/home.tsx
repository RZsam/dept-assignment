/** @jsxImportSource @emotion/react */
import Banner from './banner';
import Navbar from 'components/navbar';
import Posts from './posts';
import Clients from './cleints';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Posts />
      <Clients />
    </div>
  );
};

export default Home;
