import React, { Component } from 'react';
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
                            <Link to='/'>Home</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link to='/SignIn'>Sign In</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link to='/SignUp'>Sign Up</Link>
                        </div>

                        <div className="navbar-text ml-5 pl-5">
                            <i>VbLog</i>
                        </div>
                    </nav>
                </div>
            </div >
            </Router>
        )
    }
}

export default Navbar;