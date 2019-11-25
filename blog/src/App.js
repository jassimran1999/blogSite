import React from 'react';
import './App.css';
import Signup from './Components/SignUp';
import Signin from './Components/SignIn';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

function App() {
  
  return (
    <div className="container">
    <Navbar/>
   <div >
     
     <Router>
      <div className="sign" align="center">
        <Link to="/Signup"><p className="sign1">SIGN UP</p></Link>
        <Link to="/Signin"><p className="sign1">SIGN IN</p></Link>
      </div>  
         
     <switch>
     <Route path="/Signup">
            <Signup />
      </Route>
      <Route path="/Signin">
            <Signin />
      </Route>
      </switch>
      </Router>
   </div>  
   </div>  
  );
}

export default App;
