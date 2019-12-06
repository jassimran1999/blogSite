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
            <switch>
            <Router>
           
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/home">Home</Link>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/Signin">Sign In</Link>&emsp;
                                <Link to="/Signup"> Sign Up</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div >
            
             <Route path="/home">
            <Home />
      </Route>

            <Route path="/Signup">
            <Signup />
      </Route>
      <Route path="/Signin">
            <Signin />
      </Route>
            </Router>
            </switch>
        )
    }
}

export default Navbar;