import React from 'react';
import './App.css';
import Signup from './Components/SignUp';
import Signin from './Components/SignIn';
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
     <Router>  
         <Link to="/Signup">{'Signup'}</Link>
         <Link to="/Signin">{'Signin'}</Link>
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
  );
}

export default App;
