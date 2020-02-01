import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
      email: " ",
      redirectToHome: false
    };
    // let isAuth = localStorage.getItem('isAuthenticated')
    //     this.state = { isAuthenticated: isAuth==='true', user: null, token: ''};
    //     console.log(this.state.isAuthenticated)
  }

  // signIn(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target)
  //   this.setState({xvalue: JSON.stringify(data.get('inputEmail'))});
  //   fetch('/api/form-submit-url', {
  //     method: 'POST',
  //     body: data,
  //   });
  // }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }

    //let content = !this.state.isAuthenticated ?
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "92vh",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      >
        <form onSubmit={this._addUser}>
          <h2>Please Sign In</h2>
          <br />
          <input
            className="form-control"
            type="text"
            ref="username"
            placeholder="Username"
            required
            autofocus
          />
          <br />
          <input
            className="form-control"
            type="password"
            ref="password"
            placeholder="Password"
            required
          />
          <br />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <div>
            <Link to="/Signup">{"Signup"}</Link>
          </div>
        </form>
      </div>
      //           )
      //           :
      //           (
      //             <Redirect to="/home" />
      //           )

      //   return(
      //     <div className="App">
      //     {content}
      // </div>
    );
  }

  _addUser = event => {
    event.preventDefault();
    let user = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };

    fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/Signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(res => {
        console.log(`User added successfully: ${res}`);
        this.setState({ redirectToHome: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export default Signin;
