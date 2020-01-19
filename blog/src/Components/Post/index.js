import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    withRouter
} from 'react-router-dom';
import { Editor, EditorState, RichUtils, convertFromRaw } from 'draft-js';
import './Post.css';
import abc from '../../Constants/test'
class Post extends React.Component{

  constructor(){
    super();
    this.state={
    postData :[ ], 
    }
  }
  sendPostId = ()=>{
    fetch('http://localhost:5000/postHeader?id='+ this.props.match.params.postId).then(response => {
		  return response.json();
		}).then(res => {
		  this.setState({
      postData: res,
      })
		});
  }

componentDidMount(){
  this.sendPostId();
}

  render() {

    const link = '/user/'+this.state.postData.username;
    this.state.editorState = EditorState.createWithContent(
      convertFromRaw(abc[0])
    );
    
    
      return (
        <div className="postBox" >
          <div className="title">
            <Link className="linkUsername" exact to={link}>
              <div className="postcard">
                <img className="userimg" src={this.state.postData.imgUrl} width="30px" height="30px"/>
                <div className="username">{this.state.postData.username}</div>
              </div>
            </Link>
            <div className="postTitle">
              {this.state.postData.title}
            </div>
          </div>
          <div className="content">
          <Editor editorState={this.state.editorState} readOnly={true} />
          </div>
          <div className="action">
            <div className="like">
              <button><p className="likeNumber"><u>LIKE</u> {this.state.postData.likes}</p></button>
            </div>
            <div className="share">
              <button><u>SHARE</u></button>
            </div>
          
            
          </div>
        </div>  
      )
    }
}
export default withRouter(Post);