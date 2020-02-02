import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import postData from "../../Constants/postConstants";
import postProfileVal from "../../Constants/profilePostConstants";
import data from "../../Constants/initialiserUserData";
import HomePost from "../HomePost";
import homeConstants from '../../Constants/homeConst'
import "./Home.css";
import { request } from "http";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      HomePostData: homeConstants
    };
  }
  componentDidMount() {
    this.homePostData();
    
  }

  homePostData = () => {
    //let id = "localhost:5000/queryParams?id:"+this.props.match.params.userId
    fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/home/homedata")
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({
          HomePostData: res
        });
      });
  };

  render() {
    console.log(this.state.HomePostData['request'].length)
    if(this.state.HomePostData['request'].length > 0)
    {
    return (
        
      <div className="Home">
        <div className="HomeHeader">
          <marquee>
            <h4>
              What's on your mind? Wanna share something with the world? Here we
              have an amazing website just for you! Come BLOG WITH ME
            </h4>
          </marquee>
        </div>
       
        <div className="HomeBody">
          {this.state.HomePostData['request'].map(item => {
            return <HomePost {...item} />;
          })}
        </div>
      </div>
    );}
    else{
      return(<div/>)
    }
  }
}
export default Home;
