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
        <div className="signUpOuter">
          <form className="form-signin">
            <h2 className="form-signin-heading">Please Sign Up</h2><br/>
            <label for="inputName" className="sr-only">Name: </label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
            <br/><br/>
            <label for="inputEmail" className="sr-only">Email address: </label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <br/><br/>
            <label for="inputPassword" className="sr-only">Password: </label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            <br/><br/>

            <h2 className="form-add-heading">Details</h2>
                <label for="inputName" className="sr-only">Name </label>
                
                <input type="text" id="inputName" onChange={this.handleChange} placeholder="Name" className="form-control" required autofocus />
                <br/><br/>
                <label for="inputBio" className="sr-only">Bio </label>
                <textarea class="form-control" rows="8" id="inputBio" onChange={this.handleChange} placeholder="Bio" className="form-control" />
                <br/><br/>
                
            



            <Link to="/Name"><button className="btn btn-lg btn-primary btn-block" type="button">Sign up</button></Link>
            <br/>

            <div>
            {/* <Link to="/Signin">{'Signin'}</Link> */}
            </div>
  
          </form>
          <br/>
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
          
        </div>
        
      )
    }
}
export default Signup;