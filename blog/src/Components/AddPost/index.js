import React from 'react';
import RichText from '../richText'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import './AddPost.css';
class AddPost extends React.Component{
        render() {
            return (
              // <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', 
              // backgroundColor: 'rgba(0,0,0,0.9)'}}>
              // <div className="form">
              //   <form className="form-add">
              //     <h2 className="form-add-heading">Add New Post</h2>
              //     <label for="inputTitle" className="sr-only">Title </label>
                  
              //     <input type="text" id="inputTitle" onChange={this.handleChange} placeholder="Title" className="form-control" required autofocus />
              //     <br/><br/>
              //     <label for="inputdesc" className="sr-only">Description </label>
              //     <input type="text" id="inputDesc" onChange={this.handleChange} placeholder="Description" className="form-control" required />
              //     <br/><br/>
              //     <label for="inputContent" className="sr-only">Content </label>
              //     <textarea class="form-control" rows="8" id="inputContent" onChange={this.handleChange} placeholder="Content" className="form-control" required />
              //     <br/><br/>
              //     <button className="btn btn-lg btn-primary btn-block" onClick={this.addPost} type="button">Post</button>
              //   </form>
              //   </div>
              // </div>

              <div>
                <RichText/>
              </div>
          
      )
    }
}
export default AddPost;
