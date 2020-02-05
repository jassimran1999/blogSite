import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  withRouter
} from "react-router-dom";
import { Editor, EditorState, RichUtils, convertFromRaw } from "draft-js";
import "./Profile.css";
import postProfileVal from "../../Constants/profilePostConstants";
import data from "../../Constants/initialiserUserData";
import ProfilePost from "../ProfilePost";
import Navbar2 from "../Navbar2";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      userPosts: [],
      functionClick:()=>{},
    };
  }

  componentWillMount() {
     this.sendUsername();
     
  }

  followerCheck = function(){

    fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/isFollowed/"+this.state.userData._id)
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log("xsxs"+res)
      
    });
  }
    


  followerDecrease = function(){

    fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/unfollow/"+this.state.userData._id)
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log("csdcsd"+res)
      
    });
  }



  followerIncrease = function(){

    fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/follow/"+this.state.userData._id)
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res)
      
    });
  }
  sendUsername = () => {
      fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/profile/" + this.props.match.params.userId)
      .then(response => {
        return response.json();
      })
      .then(
        res => {
         if(res.request.length===0)
         {
           window.location.replace('/NotFound');
         }
         return res;
        }
      )
      .then(res => {
        
        this.setState({
          userData: res.request[0],
          userPosts:res.request[0].postArr
        });
        this.followerCheck();
      });
  };

  render() {
    return (
      <div className="Profile">
        <div className="userBox">
          <div className="userInfo">
            <img className="userimage" src={"http://ec2-54-159-137-67.compute-1.amazonaws.com:5000"+this.state.userData.userPhoto} />
            <div className="usercard">
              <div className="userid">{this.state.userData.username}</div>
              <div className="follow">
                <div className="following">
                  <h4>Following</h4>
                  {this.state.userData.following}
                </div>
                <div className="followers">
                  <h4>Followers</h4>
                  {this.state.userData.followers}
                </div>
              </div>
              <button
                className="btn btn-sm btn-primary btn-block"
                onClick={() => this.followerIncrease()}
                type="button"
              >
                Follow
              </button>
              <div className="descBox">
                <div className="userNameProf">{this.state.userData.name}</div>
                <div className="userDesc">
                  {this.state.userData.description}
                </div>
              </div>
            </div>
          </div>
          <div className="posts">
            {this.state.userPosts.map(item => {
              return <ProfilePost {...item} />;
            })}
          </div>
          <div className="end"> That's all folks.</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Profile);
