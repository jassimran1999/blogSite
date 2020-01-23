import React,{Component} from 'react';
import './App.css';
import Signup from './Components/SignUp';
import Signin from './Components/SignIn';
import Home from './Components/Home';
import Post from './Components/Post';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import AddPost from './Components/AddPost';
import postData from './Constants/postConstants';
import userData from './Constants/userConstants';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="outer" >
      <div className="bg"/>
      
      
      <Router>
        
      <Navbar /><br/><br/>
      <switch>
       <Route path="/home">
         <Home />
           </Route>
       
       <Route path="/Signup">
              <Signup />
        </Route>
        <Route path="/Signin">
              <Signin />
        </Route>
  
        <Route path="/AddPost">
              <AddPost />
        </Route>
        <Route path="/posts/:postId">
          <div>
            { postData.map((item) => {return (<Post {...item} /> )})}
          </div>
        </Route>
        <Route path="/users/:userId">
          <div>
            { userData.map((item) => {return (<Profile {...item} /> )})}
          </div>
        </Route>
        </switch>
        </Router>
  
        
        
        
      
  
     </div>  
    );

  }
  
  
}

export default App;
