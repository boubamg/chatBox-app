import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import base from './base'

class App extends Component {

  state = {
    messages : {},
    pseudo: this.props.match.params.pseudo
  }

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = {... this.state.messages}
    messages[`message-${Date.now()}`] = message
    this.setState({messages})
  }

  render () {

    const messages = Object.keys(this.state.messages)
    .map(key => (<Message key={key} pseudo={this.state.messages[key].pseudo} message={this.state.messages[key].message} />))

    return (
      <div className="box">
        <div>
          <div className="messages">
            <div className="messages">
              {messages}
            </div>
          </div>
        </div>
        <Formulaire 
        pseudo={this.state.pseudo} 
        addMessage={this.addMessage} 
        length={140}/>

      </div>
    );
  }
}

export default App;
