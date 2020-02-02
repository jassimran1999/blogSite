import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    browserHistory
} from 'react-router-dom';
import postProfileVal from '../../Constants/profilePostConstants' ;
import './HomePost.css';
class HomePost extends React.Component{
    
    render() {
      const link1 = '/posts/'+this.props._id;
      const link2 = '/users/profile/'+this.props.userId['username'];
      return (      
        <div className="postOuter">  
          <div className="homePost" >
            <Link className="linkHomeUser" exact to={link2}>
              <div className="postHead">      
                <div className="userName">{this.props.userId['username']}</div>
              </div>
            </Link>
            <Link className="linkHomePost" exact to={link1}>
              <div className="postBody">
                < img className="postImg" src={'http://ec2-54-159-137-67.compute-1.amazonaws.com:5000'+this.props.thumbnail}/>
              </div>
              <div className="postBottom">
                <div className="postTitleHome">{this.props.title}</div>
                <div className="postDescHome">{this.props.desc}</div>
              </div>
            </Link>
          </div>  
        </div> 
      )
    }
}
export default HomePost;