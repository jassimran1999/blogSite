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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="navbar-brand">
                            <Link to="/home">Home</Link>
                        </div>
                        <div className="justify-content-end">
                            <Link to="/Signin">Sign In</Link>
                        </div>
                        <div className="nav navbar-nav pull-xs-right">
                            <Link to="/Signup">Sign Up</Link>
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