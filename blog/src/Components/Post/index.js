import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import './Post.css';

class Post extends React.Component{
  render() {
      return (
        <div className="postBox" >
          <div className="title">
            <div className="usercard">
              <img className="userimg" src="https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png" width="30px" height="30px"/>
              <div className="username">{this.props.username}</div>
            </div>
            <div className="postTitle">
              {this.props.title}
              </div>
          </div>
          <div className="content">
               {this.props.content}
          </div>
        </div>  
      )
    }
}
export default Post;