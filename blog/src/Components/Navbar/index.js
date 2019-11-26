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
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="navbar-brand">
                            <Link to='/'>Home</Link>
                        </div>
                        
                    </nav>
                </div>
            </div >
            </Router>
        )
    }
}

export default Navbar;