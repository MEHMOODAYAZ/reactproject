import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter : 0
    };
    this.updateCounter();
  }
  
  updateCounter(){
    setInterval(()=>{
      this.setState({counter: this.state.counter+1});
    },500)
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with PC</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <br/>
        
        {this.state.counter}
      </div>
    );
  }
}

export default App;
