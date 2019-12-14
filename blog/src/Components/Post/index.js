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
    const link = '/user/'+this.props.username;
      return (
        <div className="postBox" >
          <div className="title">
            <Link className="linkUsername" exact to={link}>
              <div className="postcard">
                <img className="userimg" src={this.props.imgUrl} width="30px" height="30px"/>
                <div className="username">{this.props.username}</div>
              </div>
            </Link>
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