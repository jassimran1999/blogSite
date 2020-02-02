import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  withRouter
} from "react-router-dom";
import { Editor, EditorState, RichUtils, convertFromRaw } from "draft-js";
import "./Post.css";
import abc from "../../Constants/postConstantInit";
class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      postDataVal: abc
    };
  }
  componentDidMount() {
    this.sendPostId();
  }

  sendPostId = () => {
    fetch(
      "http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/posts/content/" + this.props.match.params.postId
    )
      .then(response => {
        return response.json();
      }).then(res => {
        console.log("dcsdcs"+res)
        this.setState({
        postDataVal: res
        })
      })
  }

  

  render() {
    let postData, link;
    postData = this.state.postDataVal.request;
    link = "";
    this.state.editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(postData.content))
    );
    return (
      <div className="postBox">
        <div className="title">
          <Link className="linkUsername" exact to={link}>
            <div className="postcard">
              <img
                className="userimg"
                src={"http://ec2-54-159-137-67.compute-1.amazonaws.com:5000"+postData.userId.userPhoto}
                width="20px"
                height="20px"
              />
              <div className="username">{postData.userId.username}</div>
            </div>
          </Link>
          <div className="postTitle">{postData.title}</div>
        </div>
        <div className="content">
          <Editor editorState={this.state.editorState} readOnly={true} />
        </div>
        <div className="action">
          <div className="like">
            <button>
              <u>LIKE</u> {postData.likes}
            </button>
          </div>
          <div className="share">
            <button>
              <u>SHARE</u>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Post);
