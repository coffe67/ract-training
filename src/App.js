import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  
  state = {
    outputs: [
      { username: 'State Username 1', paragraph_1: 'Lorem Text Paragraph 0-1', paragraph_2: 'Lorem Text Paragraph 0-2' },
      { username: 'State Username 2', paragraph_1: 'Lorem Text Paragraph 1-1', paragraph_2: 'Lorem Text Paragraph 1-2' },
      { username: 'State Username 3', paragraph_1: 'Lorem Text Paragraph 2-1', paragraph_2: 'Lorem Text Paragraph 2-2' },
    ],    
  }

  inputChangeHandler = ( event ) => {
    this.setState( {
      outputs: [
        { username: event.target.value, paragraph_1: 'Evt Lorem Text Paragraph 0-1', paragraph_2: 'Lorem Text Paragraph 0-2' },
        { username: event.target.value, paragraph_1: 'EVT Lorem Text Paragraph 1-1', paragraph_2: 'Lorem Text Paragraph 1-2' },
        { username: event.target.value, paragraph_1: 'evt Lorem Text Paragraph 2-1', paragraph_2: 'Lorem Text Paragraph 2-2' },
      ]
    } )          
  }

  textChangeHandler = ( new_text ) => {
    this.setState( {
      outputs: [
        { username: new_text, paragraph_1: 'Evt Lorem Text Paragraph 0-1', paragraph_2: 'Lorem Text Paragraph 0-2' },
        { username: '-_-', paragraph_1: 'EVT Lorem Text Paragraph 1-1', paragraph_2: 'Lorem Text Paragraph 1-2' },
        { username: '-_-', paragraph_1: 'evt Lorem Text Paragraph 2-1', paragraph_2: 'Lorem Text Paragraph 2-2' },      
      ]
    } )          
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Training</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>        
        <UserInput change={this.inputChangeHandler} default_username={this.state.outputs[0].username} />
        <UserOutput 
          extra_class = 'btn-blue'
          paragraph_1={this.state.outputs[0].paragraph_1} 
          click={this.textChangeHandler.bind(this,'New Text Paragraph')}         
          username={this.state.outputs[0].username} />

        <UserOutput           
          paragraph_2={this.state.outputs[1].paragraph_2} 
          username={this.state.outputs[1].username}/>
          
        <UserOutput 
          paragraph_1={this.state.outputs[2].paragraph_1}
          paragraph_2={this.state.outputs[2].paragraph_2} 
          username={this.state.outputs[2].username}/>
      </div>
    );
  }
}

export default App;
