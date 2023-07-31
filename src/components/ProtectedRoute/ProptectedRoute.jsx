import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteItem = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRouteItem;
