import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
      redirectToHome: false
    };
    // let isAuth = localStorage.getItem('isAuthenticated')
    //     this.state = { isAuthenticated: isAuth==='true', user: null, token: ''};
    //     console.log(this.state.isAuthenticated)
  }

  // _handleSubmit(e) {
  //   e.preventDefault();
  //   // TODO: do something with -> this.state.file
  //   console.log('handle uploading-', this.state.file);
  // }

  // _handleImageChange(e) {
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   reader.onloadend = () => {
  //     this.setState({
  //       file: file,
  //       imagePreviewUrl: reader.result
  //     });
  //   }
  //   reader.readAsDataURL(file)
  // }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img className="imgUploaded" src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    //let content = !this.state.isAuthenticated ?
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "200vh",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      >
        <form onSubmit={this._addUser}>
          <h2>Please Sign Up</h2>
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
            type="email"
            ref="email"
            placeholder="Email address"
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
          <br />

          <h2>Details</h2>
          <br />
          <input
            className="form-control"
            type="text"
            ref="name"
            placeholder="Name"
            required
            autofocus
          />
          <br />
          <textarea
            className="form-control"
            rows="8"
            ref="description"
            placeholder="Bio"
          />
          <br />
          <input
            className="form-control"
            type="text"
            ref="phoneNumber"
            placeholder="Phone Number"
            required
            autofocus
          />
          <br />
          <br />

          <h2>Profile Image</h2>
          <br />
          <div className="previewComponent">
            <input
              className="fileInput"
              type="file"
              onChange={e => this._handleImageChange(e)}
            />
            <div className="imgPreview">{$imagePreview}</div>
            <br />
            <button
              className="submitButton"
              type="submit"
              onClick={e => this._handleSubmit(e)}
            >
              Upload Image
            </button>
            <br />
            <br />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
    //     :
    //     (
    //       <Redirect to="/home" />
    //     )

    //   return (
    //     <div className="App">
    //     {content}
    // </div>

    //   )
  }

  _addUser = event => {
    event.preventDefault();
    let user = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      name: this.refs.name.value,
      email: this.refs.email.value,
      description: this.refs.description.value,
      phoneNumber: this.refs.phoneNumber.value
    };

    fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) return res.json;
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
export default Signup;

// import React, { Component } from 'react';
// class App extends Component {

//     constructor() {
//         super();
//         let isAuth = localStorage.getItem('isAuthenticated')
//         this.state = { isAuthenticated: isAuth==='true', user: null, token: ''};
//         console.log(this.state.isAuthenticated)
//     }

//     localSet = (value,setTo) =>{
//         localStorage.setItem(value,setTo);
//       };

//     logout = () => {
//         this.localSet("isAuthenticated",false);
//         this.setState({isAuthenticated: false, token: '', user: null})
//     };

//     render() {
//         let content = !!this.state.isAuthenticated ?
//             (
//                 <div>
//                     <p>Authenticated</p>
//                     <div>
//                         {"test"}
//                     </div>
//                     <div>
//                         <button onClick={this.logout} className="button">
//                             Log out
//                         </button>
//                     </div>
//                 </div>
//             ) :
//             (
//                 <div>
//                   {"LOGGED OUT"}
//                 </div>
//             );

//         return (
//             <div className="App">
//                 {content}
//             </div>
//         );
//     }
// }

// export default App;
