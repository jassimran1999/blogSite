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
    fetch('http://localhost:5000/posts?postId='+ this.props.match.params.postId).then(response => {
		  return response.json();
		}).then(res => {
      fetch('http://localhost:5000/users/image?username='+ res[0].userId).then(response => {
		  return response.json();
		}).then(reso => {
     
		  this.setState({
      userImg:reso[0].userPhoto,
      })});
		  this.setState({

      postDataVal: res,
      })
		});
  }


componentDidMount(){
  this.sendPostId();
}

  render() {
    let postData, link;
    console.log(this.state.postDataVal[0])
     postData = this.state.postDataVal[0];
    // link = '/users/'+postData.userId;
    link='';
    this.state.editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(postData.content))
    );
      return (
        <div className="postBox" >
          <div className="title">
            <Link className="linkUsername" exact to={link}>
              <div className="postcard">
                <img className="userimg" src={this.state.userImg} width="20px" height="20px"/>
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