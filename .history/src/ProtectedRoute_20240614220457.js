import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default ProtectedRoute;
