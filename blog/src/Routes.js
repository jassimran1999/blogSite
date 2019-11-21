import React from "react";
import { Route } from "react-router-dom";

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  return (
    <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
  );
}