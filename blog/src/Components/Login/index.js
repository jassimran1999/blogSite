import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
      email: " ",
      redirectToHome: false,
      flag:false,  
    };
    
  }
  handleClick1=function(){
    this.setState({flag:true});
}
handleClick2=function(){
    this.setState({flag:false});
}

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }

    let content = !!this.state.flag ? ( // right here conditional statement content will get one of the 2 navbar codes.
        <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message" onClick={this.handleClick1}>Already registered? <a href="">Sign In</a></p>
          </form>
          </div>
          </div>
      ) : (
          <div className="login-page">
              <div className="form">
        <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message" onClick={this.handleClick2}>Not registered? <a href="">Create an account</a></p>
          </form>
        </div>
      </div>  
      );
   
    return (
        <div>
            {content}
        </div>
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
export default Login;
