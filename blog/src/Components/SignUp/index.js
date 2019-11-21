import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';

class Signup extends React.Component{
  render() {
      return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <form className="form-signin">
            <h2 className="form-signin-heading">Please Sign Up</h2>
            <label for="inputName" className="sr-only">Name: </label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
            <br/><br/>
            <label for="inputEmail" className="sr-only">Email address: </label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <br/><br/>
            <label for="inputPassword" className="sr-only">Password: </label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            <br/><br/>
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
            <br/>
            <Router>
         
            <Link to="/Signin">{'Signin'}</Link>
          
          </Router>
          </form>
          
        </div>
        
      )
    }
}
export default Signup;