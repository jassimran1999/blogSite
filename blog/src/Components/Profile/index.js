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
    }
  }

  componentDidMount(){
    this.sendUsername();
  }


  sendUsername = ()=>{
    //let id = "localhost:5000/queryParams?id:"+this.props.match.params.userId
    fetch('http://localhost:5000/userHeader?id='+ this.props.match.params.userId).then(response => {
		  return response.json();
		}).then(res => {
      console.log(res[0])
		  this.setState({
      userData: res,
      userPosts: res[0].postArr,
      })
		});
  }

  followerIncrease = () => {
    this.setState({ follow1 : this.state.follow1+1 })
  }
  render() {
    console.log(this.state.userData);
    let userValues = this.state.userData;
      return (
      
        <div className="Profile">
          <switch>
            <Router>
              <Navbar2 />
            </Router>
          </switch>
          <div className="userBox" >
            <div className="userInfo">
              <img className="userimage" src={this.state.userData[0].userPhoto} />
              <div className="usercard">
                <div className="userid">{this.state.userData[0].username}</div>
                <div className="follow">
                  <div className="following">
                    <h4>Following</h4>{this.state.userData[0].following1}
                  </div>
                  <div className="followers">
                    <h4>Followers</h4>{this.state.userData[0].follow1} 
                  </div>
                </div>
                <button className="btn btn-sm btn-primary btn-block" onClick={this.followerIncrease} type="button">Follow</button>
                <div className="descBox">
                  <div className="userNameProf">{this.state.userData[0].name}</div>
                  <div className="userDesc">{this.state.userData[0].description}</div>
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