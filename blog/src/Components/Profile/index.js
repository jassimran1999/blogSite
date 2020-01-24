import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    withRouter
} from 'react-router-dom';
import { Editor, EditorState, RichUtils, convertFromRaw } from 'draft-js';
import './Profile.css';
import postProfileVal from '../../Constants/profilePostConstants' ;
import data from '../../Constants/initialiserUserData';
import ProfilePost from '../ProfilePost';
import Navbar2 from '../Navbar2';

class Profile extends React.Component{
  constructor(){
    super();
    this.state={
    userData:data,
    userPosts:[],
    follow1 : 1
    }
  }

  componentDidMount(){
    this.sendUsername();
  }


  sendUsername = ()=>{
    //let id = "localhost:5000/queryParams?id:"+this.props.match.params.userId
    console.log(this.props.match.params.userId)
    fetch('http://localhost:5000/users/?username='+ this.props.match.params.userId).then(response => {
		  return response.json();
		}).then(res => {
		  this.setState({
      userData: res[0],
      userPosts: res[0].postArr,
      })
		});
  }

  followerIncrease() {
    this.setState(prevState => ({ 
      follow1 : prevState.follow1+1 
    }))
    console.log(this.state.count)
  }
  render() {
    console.log(this.state.userData);
    let userValues = this.state.userData;

      return (
      
        <div className="Profile">
          <div className="userBox" >
            <div className="userInfo">
              <img className="userimage" src={this.state.userData.userPhoto} />
              <div className="usercard">
                <div className="userid">{this.state.userData.username}</div>
                <div className="follow">
                  <div className="following">
                    <h4>Following</h4>{this.state.userData.following}
                  </div>&nbsp;
                  <div className="followers">
                    <h4>Followers</h4>{this.state.userData.followers} 
                  </div>
                </div>
                <button className="btn btn-sm btn-primary btn-block" onClick={()=>this.followerIncrease()} type="button">Follow</button>
                <div className="descBox">
                  <div className="userNameProf">{this.state.userData.name}</div>
                  <div className="userDesc">{this.state.userData.description}</div>
                </div>
              </div>
            </div>
            <div className="posts">
              {this.state.userPosts.map((item) => {return (<ProfilePost {...item} /> )})}
            </div>
            <div className="end"> That's all folks.</div>
          </div>  
        </div>
      )
    }
}
export default withRouter(Profile);