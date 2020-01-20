import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
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
          $imagePreview = (<img className="img1" src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

      return (
        <div style={{display: 'flex',flexDirection:'column',  justifyContent:'center', alignItems:'center', height: '220vh',
        backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <form className="form-signin">
            <h2 className="form-signin-heading">Please Sign Up</h2><br/>
            <label for="inputName" className="sr-only">Username: </label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Username" required autofocus />
            <br/><br/>
            <label for="inputEmail" className="sr-only">Email address: </label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <br/><br/>
            <label for="inputPassword" className="sr-only">Password: </label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            <br/><br/>
          
            <center><h2 className="form-add-heading">Details</h2></center>
                <label for="inputName" className="sr-only">Name </label>
                <input type="text" id="inputName" onChange={this.handleChange} placeholder="Name" className="form-control" required autofocus />
                <br/><br/>
                <label for="inputBio" className="sr-only">Bio </label>
                <textarea class="form-control" rows="8" id="inputBio" onChange={this.handleChange} placeholder="Bio" className="form-control" />
                <br/><br/>
                <label for="inputName" className="sr-only">Phone</label>
                <input type="text" id="inputName" onChange={this.handleChange} placeholder="Phone Number" className="form-control" required autofocus />

            



            
            <br/>

            <div>
            {/* <Link to="/Signin">{'Signin'}</Link> */}
            </div>
  
          </form>
          
          <br/>

          <h2 className="form-add-heading">Profile Image</h2>
          <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}>
              <input className="fileInput" 
                type="file" 
                onChange={(e)=>this._handleImageChange(e)} />
              
            </form>
            <div className="imgPreview">
              {$imagePreview}
            </div>
            <br/>
            <button className="submitButton" 
                type="submit" 
                onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </div>
          <br/>
          <Link to="/Name"><button className="btn btn-lg btn-primary btn-block" type="button">Sign up</button></Link>
          
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