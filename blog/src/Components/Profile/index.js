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

class Profile extends React.Component{
  render() {
      return (
        <div className="Profile">
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