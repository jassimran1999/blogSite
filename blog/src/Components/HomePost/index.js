import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import postProfileVal from '../../Constants/profilePostConstants' ;
  import './HomePost.css';
class HomePost extends React.Component{
    render() {
        return (
            <div className="postOuter">
          <div className="homePost">
              <div className="postHead">
                <img className="userImg" src={this.props.imgUrl}/>
                <div className="userName">{this.props.username}</div>
              </div>
              <div className="postBody">
              < img className="postImg" src={this.props.thumbnail}/>
              </div>
              <div className="postBottom">
                <div className="postDesc">{this.props.desc}</div>
              </div>
          </div>
          </div>
        )
      }
  }
  export default HomePost;