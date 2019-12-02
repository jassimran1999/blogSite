import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import './ProfilePost.css';

class ProfilePost extends React.Component{
  render() {
      return (
        <div>
        <div className="prof-post">
          <div className="post-thumbnail">
          <img className="imageThumbnail" src={this.props.thumbnail} />
          </div>
          <div className="post-meta">
          <div className="postProfileTitle">{this.props.title}</div>
          <div className="postDesc">{this.props.desc}</div>
          </div>
          </div>
          <div className="post-spacing">
            <div className="borderHr"></div>
        </div>
        </div>
      )
    }
}
export default ProfilePost;