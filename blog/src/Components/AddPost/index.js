import React from 'react';
import RichText from '../richText'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect
  } from 'react-router-dom';
  import './AddPost.css';
class AddPost extends React.Component{
  constructor(props) {
    super(props);
    let isAuth = localStorage.getItem('isAuthenticated') //wont leave for anywhere but will be true or false
        this.state = { isAuthenticated: isAuth==='true'};// 
        console.log(this.state.isAuthenticated) //value logging
  }


        render() {
          // document.body.style = 'background: red;';
          let content = !!this.state.isAuthenticated ?// right here conditional statement content will get one of the 2 navbar codes.
        (
          <div className="addPostBg">
            <RichText/>
            </div>):
        (<Redirect to="/users/login"/>)


            return (
              <div>
                {content}
              </div>
          
      )
    }
}
export default AddPost;
