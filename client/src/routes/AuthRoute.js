import React from "react";
import { Route } from "react-router-dom";

const AuthRoute = props => {
  return (
    <Route {...props}>{props.children}</Route>
  )
}

export default AuthRoute