import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { count: 0};

    this.countLetters = this.countLetters.bind(this);
  }



  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.countLetters}></textarea>
    <div className="counter">{this.state.count}</div>
      </div>
    );
  }

  countLetters = (event) => {
    let text = event.target.value;
    this.setState({count: text.length});
  }

}

export default App;
