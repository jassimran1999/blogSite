import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import './Profile.css';

class Post extends React.Component{
  render() {
      return (
        <div className="Profile">
            <div className="userBox" >
            <div className="userInfo">
                <img className="userimage" src={this.props.userPhoto} />
                <div className="usercard">
                    <div className="userid">{this.props.username}</div>
                    <div className="descBox">
                        <div className="userName">{this.props.name}</div>
                        <div className="userDesc">{this.props.description}</div>
                    </div>
                </div>
            </div>
            <div className="content">
                {this.props.content}
            </div>
            </div>  
        </div>
      )
    }
}
export default Post;