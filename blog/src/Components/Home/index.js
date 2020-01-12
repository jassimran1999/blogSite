import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import postData from '../../Constants/postConstants';
import postProfileVal from '../../Constants/profilePostConstants' ;
import data from '../../Constants/initialiserUserData';
import HomePost from '../HomePost';
import './Home.css';

class Home extends React.Component{
    constructor(){
        super();
        this.state={
        HomePostData:data,
        }
      }
    
      componentDidMount(){
        this.homePostData();
      }
    
    
      homePostData = ()=>{
        //let id = "localhost:5000/queryParams?id:"+this.props.match.params.userId
        fetch('http://localhost:5000/homedata').then(response => {
              return response.json();
            }).then(res => {
                console.log('fsdsd',res)
              this.setState({
                HomePostData: res,
          })
            });
      }

    render() {

        return (
            <div className="Home">
                

                <div className="HomeHeader">
                    <center><h2>BLOGwithME</h2></center>
                </div>
                <div className="initial">
                    <h1>BLOG W/ ME</h1>
                </div>
                <div className="HomeBody">
                    { this.state.HomePostData.map((item) => {return (<HomePost {...item} /> )})}
                </div>
            </div>
        )
    }
}
export default Home;
