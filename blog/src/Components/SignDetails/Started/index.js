import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  withRouter
} from "react-router-dom";

class Started extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.9)"
        }}
      >
        To continue SignIn
        <Link to="/Signin">
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.signIn}
            type="button"
          >
            Sign in
          </button>
        </Link>
      </div>
    );
  }
}

export default Started;
