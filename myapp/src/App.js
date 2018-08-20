import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Nick', age: '30', belt: 'red', id: '1' },
      { name: 'Efe', age: '27', belt: 'blue', id: '2' },
      { name: 'Toby', age: '28', belt: 'black', id: '3' }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome :-)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
