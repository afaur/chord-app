import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {stringState: 0};
    this.circleClick = this.circleClick.bind(this);
  }
  componentDidUpdate() {
    console.log('component did update');
    console.log(this.state);
  }
  circleClick(e) {
     e.currentTarget.style.opacity === '1' ? 
     e.currentTarget.style.opacity = 0 :
     e.currentTarget.style.opacity = 1
     this.setState({stringState: 1});
  } 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <svg 
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={140} height={140}>
          {/* strings */}
          <line x1={20} y1={20} x2={20} y2={140} strokeWidth={2} stroke="black" id="string" />
          <line x1={40} y1={20} x2={40} y2={140} strokeWidth={2} stroke="black" />
          <line x1={60} y1={20} x2={60} y2={140} strokeWidth={2} stroke="black" />
          <line x1={80} y1={20} x2={80} y2={140} strokeWidth={2} stroke="black" />
          <line x1={100} y1={20} x2={100} y2={140} strokeWidth={2} stroke="black" />
          <line x1={120} y1={20} x2={120} y2={140} strokeWidth={2} stroke="black" />
           {/* nut */} 
          <line x1={19} y1={20} x2={121} y2={20} strokeWidth={4} stroke="black" />
          {/* frets */}
          <line x1={19} y1={40} x2={121} y2={40} strokeWidth={2} stroke="black" />
          <line x1={19} y1={60} x2={121} y2={60} strokeWidth={2} stroke="black" />
          <line x1={19} y1={80} x2={121} y2={80} strokeWidth={2} stroke="black" />
          <line x1={19} y1={100} x2={121} y2={100} strokeWidth={2} stroke="black" />
          <line x1={19} y1={120} x2={121} y2={120} strokeWidth={2} stroke="black" />
          {/* finger position circles */}
          <circle cx={20} cy={40} r={8} fill="black" onClick={this.circleClick} id="circle"/>
          <circle cx={40} cy={40} r={8} fill="black" onClick={this.circleClick} id="circle"/>

          {/* open/muted strings */}
          <circle cx={20} cy={10} r={8} fill="none" stroke="black" strokeWidth={4} />
        </svg>
      </div>
    );
  }
}

export default App;
