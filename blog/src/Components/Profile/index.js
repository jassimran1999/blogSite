import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import './Profile.css';
  import postProfileVal from '../../Constants/profilePostConstants' ;
  import ProfilePost from '../ProfilePost';
  import Navbar2 from '../Navbar2';

class Profile extends React.Component{
  render() {
      return (
        <div className="Profile">
        <switch>
          <Router>
            <Navbar2 />
          </Router>
        </switch>
            <div className="userBox" >
              <div className="userInfo">
                  <img className="userimage" src={this.props.userPhoto} />
                  <div className="usercard">
                      <div className="userid">{this.props.username}</div>
                      <div className="descBox">
                          <div className="userNameProf">{this.props.name}</div>
                          <div className="userDesc">{this.props.description}</div>
                      </div>
                  </div>
              </div>
              <div className="follow">
                <p>
                  <h3>Following</h3>{this.props.following1}
                  <h3>Followers</h3>{this.props.follow1}    
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.props.follow1+1} type="button">Follow</button>
                </p>
              </div>
                <div className="posts">
                { postProfileVal.map((item) => {return (<ProfilePost {...item} /> )})}
                </div>
           <div className="end"> That's all folks.</div>
            </div>  
        </div>
      )
    }
}
export default Profile;