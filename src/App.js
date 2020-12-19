import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {Toolbar} from "@material-ui/core";
import Game from "./components/Game";

class App extends Component {

  render() { 

    return(
    <div>
       <Navbar/>
       <Toolbar/>
      <Game />
    </div>
    
      ) ;
  }
}
export default App;




