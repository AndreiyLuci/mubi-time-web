import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function PrivateRoute(props) {
  const { token } = useAuth();

  if (!token) {
    return <Redirect to="/login" />
  }
  return (
    <Route {...props} />
  );
}