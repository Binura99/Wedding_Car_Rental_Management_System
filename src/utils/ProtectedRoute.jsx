import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ allowedRoles, component: Component, ...rest }) => {
  const token = localStorage.getItem('accessToken');
  const user = JSON.parse(atob(token.split('.')[1])); // Decoding the JWT payload
  const role = user.role;

  // Check if the user's role is allowed for this route
  const isAllowed = allowedRoles.includes(role);

  return (
    <Route
      {...rest}
      element={
        isAllowed ? (
          <Component />
        ) : (
          // Redirect to a restricted access page or login page
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;