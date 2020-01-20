import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect
  } from 'react-router-dom';

class Signin extends React.Component{

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '',email: " "};
    let isAuth = localStorage.getItem('isAuthenticated')
        this.state = { isAuthenticated: isAuth==='true', user: null, token: ''};
        console.log(this.state.isAuthenticated)
  }


  signIn(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    this.setState({xvalue: JSON.stringify(data.get('inputEmail'))});
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

        render() {

          let content = !this.state.isAuthenticated ?
          (
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '92vh',
              backgroundColor: 'rgba(0,0,0,0.6)'}}>
                <form className="form-signin" onSubmit={this.signIn}>
                  <h2 className="form-signin-heading">Please Sign In</h2>
                  <label for="inputEmail" name ="email" className="sr-only">Email address</label>
                  <input type="email"  name="inputEmail" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Username/Email address" required autofocus />
                  <br/><br/>
                  <label for="inputPassword" className="sr-only">Password</label>
                  <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                  <br/><br/>
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="submit">Sign in</button>
                  
                <div>
                  <Link to="/Signup">{'Signup'}</Link>
                </div>
                </form>
              </div>):
              (
                <Redirect to="/home" />
              )
          
      return(
        <div className="App">
        {content}
    </div>
      );
    }
}
export default Signin;
