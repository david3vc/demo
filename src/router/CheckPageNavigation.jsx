import {Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hooks/auth/useAuth';

export const PrivateOutlet = () => {
  let auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export const PublicOutlet = () => {
  let auth = useAuth();
  return !auth ? <Outlet /> : <Navigate to="/" />;
};
