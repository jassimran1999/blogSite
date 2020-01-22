import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect
} from 'react-router-dom';

class Signup extends React.Component{

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
    let isAuth = localStorage.getItem('isAuthenticated')
        this.state = { isAuthenticated: isAuth==='true', user: null, token: ''};
        console.log(this.state.isAuthenticated)
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="imgUploaded" src={imagePreviewUrl} />);
    } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    let content = !this.state.isAuthenticated ?
      (
        <div style={{display: 'flex',flexDirection:'column',  justifyContent:'center', alignItems:'center', height:'200vh',
        backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <form>
            <h2>Please Sign Up</h2><br/>
            <input className="form-control" type="name" onChange={this.handleNameChange} placeholder="Username" required autofocus />
            <br/>
            <input className="form-control" type="email" onChange={this.handleEmailChange} placeholder="Email address" required autofocus />
            <br/>
            <input className="form-control" type="password" onChange={this.handlePasswordChange} placeholder="Password" required />
            <br/><br/>
          
            <h2>Details</h2><br/>
            <input className="form-control" type="text" onChange={this.handleChange} placeholder="Name" required autofocus />
            <br/>
            <textarea className="form-control" rows="8" onChange={this.handleChange} placeholder="Bio"/>
            <br/>
            <input className="form-control" type="text" onChange={this.handleChange} placeholder="Phone Number" required autofocus />
            <br/><br/>

            <h2>Profile Image</h2><br/>
            <div className="previewComponent">
              <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
              <div className="imgPreview">
                {$imagePreview}
              </div>
              <br/>
              <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
              <br/><br/>
              <Link><button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="Submit">Sign up</button></Link>

            </div>
          </form>  
        </div>
        ):
        (
          <Redirect to="/home" />
        )

      return (
        <div className="App">
        {content}
    </div>
        
      )
    }
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