import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <div className='app-container'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
