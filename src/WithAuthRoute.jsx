import React from "react";
import { Route } from "react-router-dom";

const WithAuthRoute = ({ path, user, component: Component, loading }) => {
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Route path={path}>
      <Component user={user} />
    </Route>
  );
};

export default WithAuthRoute;
