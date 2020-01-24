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
import abc from '../../Constants/postConstantInit'
class Post extends React.Component{

  constructor(){
    super();
    this.state={
    postDataVal :abc, 
    }
  }
  sendPostId = ()=>{
    fetch('http://localhost:5000/posts?id='+ this.props.match.params.postId).then(response => {
		  return response.json();
		}).then(res => {
		  this.setState({
      postDataVal: res,
      })
		});
  }

componentDidMount(){
  this.sendPostId();
}

  render() {
    let postData = this.state.postDataVal[0]
    const link = '/users/'+postData.userId;
    this.state.editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(postData.content))
    );
    
    
      return (
        <div className="postBox" >
          <div className="title">
            <Link className="linkUsername" exact to={link}>
              <div className="postcard">
                <img className="userimg" src={postData.imgUrl} width="30px" height="30px"/>
                <div className="username">{postData.userId}</div>
              </div>
            </Link>
            <div className="postTitle">
              {postData.title}
            </div>
          </div>
          <div className="content">
          <Editor editorState={this.state.editorState} readOnly={true} />
          </div>
          <div className="action">
            <div className="like">
              <button><u>LIKE</u> {postData.likes}</button>
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