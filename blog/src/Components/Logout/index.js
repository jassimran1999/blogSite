import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  browserHistory 
} from "react-router-dom";

class Logout extends React.Component {  
    constructor(props)
    {
        super(props)
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
    }
    updateLocation = ()=>
    {
        window.location.replace('/');
    }
   

  render() {
   this.updateLocation()
    return(<div/>)
  }
}
export default Logout;
