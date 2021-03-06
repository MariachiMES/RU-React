import React, { Component, useEffet, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "../../utils/auth";
function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "?", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
