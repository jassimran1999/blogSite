import React, { Component } from 'react';

class Main extends Component {
    render () {
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
}
export default Main;