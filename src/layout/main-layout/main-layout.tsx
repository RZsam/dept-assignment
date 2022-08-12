import Navbar from './navbar';
import Footer from './footer';
import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
