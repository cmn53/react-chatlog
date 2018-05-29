import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'


class App extends Component {
  findChatters() {
    const chatters = [];

    chatMessages.forEach((message) => {
      if (!chatters.includes(message.sender)) {
        chatters.push(message.sender);
      }
    })
    return chatters;
  }

  render() {
    const messages = chatMessages.map((message, key) => {
      return (
        < ChatEntry
          key={key}
          name={message.sender}
          body={message.body}
          time={message.timeStamp}
        />
      );
    });

    const chatters = this.findChatters();

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat Log between {chatters[0]} and {chatters[1]}</h1>
        </header>
        <main className="App-main">
          {messages}
        </main>
      </div>
    );
  }
}

export default App;
