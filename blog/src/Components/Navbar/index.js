import React, { Component } from 'react';
import Signup from './../SignUp';
import Signin from './../SignIn';
//import App from './../../App';
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
            <Router>
           
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/home">Home</Link>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/Signin">Sign In&emsp;</Link>
                                <Link to="/Signup"> Sign Up</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div >
            
            {/* <Route path="/">
            <App />
      </Route> */}

            <Route path="/Signup">
            <Signup />
      </Route>
      <Route path="/Signin">
            <Signin />
      </Route>
            </Router>
        )
    }
}

export default Navbar;