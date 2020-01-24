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
      const link1 = '/posts/'+this.props.id;
      const link2 = '/users/'+this.props.username;
      return (      
        <div className="postOuter">  
          <div className="homePost" >
            <Link className="linkHomeUser" exact to={link2}>
              <div className="postHead">      
                <img className="userImg" src={this.props.imgUrl}/>
                <div className="userName">{this.props.username}</div>
              </div>
            </Link>
            <Link className="linkHomePost" exact to={link1}>
              <div className="postBody">
                < img className="postImg" src={this.props.thumbnail}/>
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