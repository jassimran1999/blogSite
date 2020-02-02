import React,{flag} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  browserHistory 
} from "react-router-dom";
import "./UserUpdate.css";

class UserUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          imagePreviewUrl: "",
          redirectToHome: false,
          flag: false,
          message: ""
        };
        
      
    
      this.handleClick = this.handleClick.bind(this);
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

      handleClick=()=>{
        
    }
    
    
    refreshPage = ()=> {
      window.location.replace('/');
    }
      render() {
        if (this.state.redirectToHome) {
          this.refreshPage();
          
        }
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img className="postImgUploaded" src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
    
       
        return (
            <div>
              <div className="login-page">
         <div className="form">
       <form onSubmit={this._updateUser} className="register-form">
          
          <input type="password" ref="password" placeholder="New Password" autofocus />
          <br/>
          <input type="text" ref="name" placeholder="Name" autofocus />
          <br/>
          <textarea ref="description" placeholder="Bio" autofocus />
          <br/>
          <input type="text" ref="phoneNumber" placeholder="Phone Number" autofocus />
          <br/>
          <h2>Profile Image</h2>
          <div className="postPreviewComponent">
           <center>
              <input className="postFileInput" 
                type="file" 
                onChange={(e)=>this._handleImageChange(e)} 
                ref = "thumbnail"
                />
            
            <div className="postImgPreview"> 
              {$imagePreview}
            </div>
            <br/>
            <button className="postSubmitButton" 
                type="submit" 
                onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                <br/><br/>
                <button className="doneButton" type="submit">Update</button>
                </center>
          </div>
          </form>
          </div>
          </div>
                
            </div>
        );
      }
    
      _addUser = (event) => {
        event.preventDefault();
    
        let user = {
          username: this.state.username,
          password: this.state.password
        };
        fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then(res => {
            
            if (res.ok) 
            {
              return res.json();
              
            }else{
              this.setState({message:"Unauthorized."})
            }
          })
          .then(res => {
            
            if(res.token=== undefined)
            {
              localStorage.setItem('isAuthenticated',false);
            }
            localStorage.setItem('isAuthenticated',true);
            localStorage.setItem('token',res.token);
            localStorage.setItem('user',this.state.username);
            
            this.setState({ redirectToHome: true });
            
          })
          .catch(err => {
            console.log(err);
          });
      };
}
export default UserUpdate;