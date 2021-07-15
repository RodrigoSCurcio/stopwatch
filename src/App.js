import React, {Component} from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      button: 'VAI'
    };
    this.timer = null;
    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.button = 'VAI';
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.number += 0.1;
        this.setState(state);
      }, 100);
      state.button = 'PAUSAR';
    }

    this.setState(state);
  }

  clear() {
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.number = 0;
    state.button = 'VAI';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src='./assets/cronometro.png' alt='cronometro'/>
        <a className="timer" href>{this.state.number.toFixed(1)}</a>
        <div className='divBtn'>
          <a href onClick={this.go}>{this.state.button}</a>
          <a href onClick={this.clear}>LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;