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
    const link = '/'+this.props.id;
      return (
        <div>
        <div className="prof-post">
          <div className="post-thumbnail">
          <img className="imageThumbnail" src={this.props.thumbnail} />
          </div>
          <div className="post-meta">
          <Link className="linkProfile" exact to={link}>
          <div className="postProfileTitle">{this.props.title}</div>
          <div className="postDesc">{this.props.desc}</div>
          </Link>
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