import Admin from './Admin';
import Auth from './Auth';
import useAuth from '../hooks/auth/useAuth';
import Preloader from './partials/Preloader';

const Layout = () => {
    let auth = useAuth();

  return (
    <>
      <Preloader />
      { auth ? <Admin /> : <Auth /> }
    </>
  )
};

export default Layout;
