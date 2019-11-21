import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';

class Signin extends React.Component{
        render() {
            return (
              <div>
                <form className="form-signin">
                  <h2 className="form-signin-heading">Please sign in</h2>
                  <label for="inputEmail" className="sr-only">Email address</label>
                  <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                  <label for="inputPassword" className="sr-only">Password</label>
                  <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                  
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
                </form>
                <div>
                  <Link to="/signup">{'Signup'}</Link>
                </div>
              </div>
          
      )
    }
}
export default Signin;
