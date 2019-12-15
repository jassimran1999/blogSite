import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    withRouter
} from 'react-router-dom';

class Name extends Component{
    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.9)'}}>
            <div className="form">
              <form className="form-add">
                <h2 className="form-add-heading">Details</h2>
                <label for="inputName" className="sr-only">Name </label>
                
                <input type="text" id="inputName" onChange={this.handleChange} placeholder="Name" className="form-control" required autofocus />
                <br/><br/>
                <label for="inputBio" className="sr-only">Bio </label>
                <textarea class="form-control" rows="8" id="inputBio" onChange={this.handleChange} placeholder="Bio" className="form-control" />
                <br/><br/>
                <Link to="/ImageUpload"><button className="btn btn-lg btn-primary btn-block" type="button">{'Next'}</button></Link>
              </form>
              </div>
            </div>
        )
    }
}

export default Name;