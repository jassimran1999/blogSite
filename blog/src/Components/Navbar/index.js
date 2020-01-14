import React, { Component } from 'react';
import Signup from './../SignUp';
import Signin from './../SignIn';
import Home from './../Home';
// import App from './../../App.js';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            
           
           
            <div className="row" style={{width:'102%',zIndex:'1',borderBottomStyle:'solid',backgroundColor:'#101820FF',position:'fixed'}}>
                <div className="col">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/home" >Home</Link>
                            </div>
                            <div className="">
                                <Link className="navbar-brand" to="/home">BLOG with ME</Link> 
                            </div>
                            <div className="nav navbar-nav navbar-right">
                                <div>
                                
                                <Link exact to="/Signin">{"Sign In"}</Link>&emsp;
                                <Link exact to="/Signup">{'Signup'}</Link>
                                
                                </div>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        
          
        
        
        )
    }
}

export default Navbar;