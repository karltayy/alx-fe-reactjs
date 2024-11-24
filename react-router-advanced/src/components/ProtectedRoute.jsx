import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../useAuth';

function ProtectedRoute({ element }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  return element; // If authenticated, render the passed element
}

export default ProtectedRoute;
