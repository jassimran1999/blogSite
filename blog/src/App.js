import React from 'react';
import './App.css';
import Signup from './Components/SignUp';
import Signin from './Components/SignIn';
import Post from './Components/Post';
import Navbar from './Components/Navbar';
import postData from './Constants/postConstants';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

function App() {
  
  return (
    <div className="outer" >
    
    <Navbar />
    <switch>
   
     
     <Router>
     <Route path="/home">
     <div className="background">
      <div >
      <div className="sign" align="center">
        <Link to="/Signup"><p className="sign1">SIGN UP</p></Link>
        <Link to="/Signin"><p className="sign1">SIGN IN</p></Link>
        </div>  
      </div> 
      </div>  
         </Route>
     
     <Route path="/Signup">
            <Signup />
      </Route>
      <Route path="/Signin">
            <Signin />
      </Route>
      <Route path="/jv41">
        <div>
          { postData.map((item) => {return (<Post {...item} /> )})}
        </div>
      </Route>
      
      </Router>

      
      </switch>
      
    

   </div>  
  );
}

export default App;
