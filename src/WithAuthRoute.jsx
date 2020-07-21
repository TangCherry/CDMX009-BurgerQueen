import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

const WithAuthRoute = ({ path, user, component: Component, loading }) => {

  if (loading) {
    return <div>Cargando...</div>
  }

  if (!user.user) {
    return   <Redirect to="/Login" />;
  }

  return (
    <Route path={path}>
      <Component user={user} />
    </Route>
  );
};

export default WithAuthRoute;
