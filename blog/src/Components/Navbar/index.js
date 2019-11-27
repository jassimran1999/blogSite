import React, { Component } from 'react';
import Signup from './../SignIn';
import Signin from './../SignUp';
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
                            <Link to="/">Home</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link to="/Signin">Sign In</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link to="/Signup">Sign Up</Link>
                        </div>

                        <div className="navbar-text ml-5 pl-5">
                            <i>VbLog</i>
                        </div>
                    </nav>
                </div>
            </div >
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