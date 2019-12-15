import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    withRouter
} from 'react-router-dom';
import './ImageUpload.css'
class ImageUpload extends Component{
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
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.9)'}}>
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

export default ImageUpload;