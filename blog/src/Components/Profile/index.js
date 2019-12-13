import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    withRouter
} from 'react-router-dom';
import './Profile.css';
import postProfileVal from '../../Constants/profilePostConstants' ;
import ProfilePost from '../ProfilePost';
import Navbar2 from '../Navbar2';

class Profile extends React.Component{
  constructor(){
    super();
    this.state={
    
    }
  }

  componentDidMount(){
    this.sendUsername();
  }


  sendUsername = ()=>{
    //let id = "localhost:5000/queryParams?id:"+this.props.match.params.userId
    fetch('http://localhost:5000/queryParams?id='+ this.props.match.params.userId).then(response => {
		  return response.json();
		}).then(res => {
		  this.setState({
			userData: res,
      })
      
		});


  }
  render() {
    console.log(this.state.userData);
      return (
        
        <div className="Profile">
          <switch>
            <Router>
              <Navbar2 />
            </Router>
          </switch>
          <div className="userBox" >
            <div className="userInfo">
              <img className="userimage" src={this.props.userPhoto} />
              <div className="usercard">
                <div className="userid">{this.props.username}</div>
                <div className="follow">
                  <div className="following">
                    <h4>Following</h4>{this.props.following1}
                  </div>
                  <div className="followers">
                    <h4>Followers</h4>{this.props.follow1} 
                  </div>
                </div>
                <button className="btn btn-sm btn-primary btn-block" onClick={this.props.follow1+1} type="button">Follow</button>
                <div className="descBox">
                  <div className="userNameProf">{this.props.name}</div>
                  <div className="userDesc">{this.props.description}</div>
                </div>
              </div>
            </div>
            <div className="posts">
              { postProfileVal.map((item) => {return (<ProfilePost {...item} /> )})}
            </div>
            <div className="end"> That's all folks.</div>
          </div>  
        </div>
      )
    }
}
export default withRouter(Profile);