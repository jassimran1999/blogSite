import { BrowserRouter } from 'react-router-dom';
import React,{Component} from 'react';
import Appl from './Components/App'

class App extends Component {
  render(){
    return (
     <div>
      <BrowserRouter>
      <Appl />
      </BrowserRouter>
     </div>
    );

  }
  
  
}

export default App;
