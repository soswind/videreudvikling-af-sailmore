import React, { useContext } from "react";
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from './login';

const PrivateRoute = ({ element }) => {
  const authContext = useContext(AuthContext);

  return authContext.authenticated ? element : <Navigate to="/login" />;
}

export default PrivateRoute;