import { useLocation } from 'react-router-dom';
import HeaderPrimary from '../Headers/HeaderPrimary';
import HeaderSecondary from '../Headers/HeaderSecondary';
import Footer from '../Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case '/shop':
        return <HeaderSecondary />;
      default:
        return <HeaderPrimary />;
    }
  };
  return (
    <>
      {renderHeader()}
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
