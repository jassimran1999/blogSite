import React, { Component } from "react";
import "./App.css";
import Signup from "../SignUp";
import Signin from "../SignIn";
import Home from "../Home";
import Post from "../Post";
import Profile from "../Profile";
import Navbar from "../Navbar";
import AddPost from "../AddPost";
import postData from "../../Constants/postConstants";
import userData from "../../Constants/userConstants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div className="outer">
        <div className="bg" />

        <Navbar />
        <br />
        <br />
        <switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Signin">
            <Signin />
          </Route>

          <Route path="/AddPost">
            <AddPost />
          </Route>
          <Route path="/posts/:postId">
            <div>
              {postData.map(item => {
                return <Post {...item} />;
              })}
            </div>
          </Route>
          <Route path="/users/:userId">
            <div>
              {userData.map(item => {
                return <Profile {...item} />;
              })}
            </div>
          </Route>
        </switch>
      </div>
    );
  }
}
