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
import HomePost from '../HomePost';
import './Home.css';

class Home extends React.Component{
    render() {
        return (
            <div className="Home">
                <div className="HomeHeader">
                    <center><h2>BloggingInn</h2></center>
                </div>
                <div className="HomeBody">
                    { postProfileVal.map((item) => {return (<HomePost {...item} /> )})}
                </div>
            </div>
        )
    }
}
export default Home;
