import React, { Component } from "react";
import "./App.css";
import Signup from "../SignUp";
import Signin from "../SignIn";
import Login from "../Login";
import UserUpdate from "../UserUpdate";
import Logout from "../Logout";
import Home from "../Home";
import Post from "../Post";
import Profile from "../Profile";
import Navbar from "../Navbar";
import AddPost from "../AddPost";
import Notfound from "../Notfoundvalue";
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
    const NoMatch = ({ location }) => (
      window.location.replace('/NotFound')
    )
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
          < Route path="/users/login">
            <Login />
          </Route>
          <Route path="/AddPost">
            <AddPost />
          </Route>
          <Route path="/NotFound">
            <Notfound />
            </Route>
          <Route path="/users/Update">
            <UserUpdate />
          </Route>
          <Route path="/posts/:postId">
            <div>  b
              {postData.map(item => {
                return <Post {...item} />;
              })}
            </div>
          </Route>
          
          <Route path="/Logout">
            <Logout/>
            </Route>
          <Route path="/users/profile/:userId">
            <div>
              <Profile/>;
            </div>
          </Route>
        </switch> 
      </div>
    );
  }
}
