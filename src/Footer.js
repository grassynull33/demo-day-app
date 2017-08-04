import React, { Component } from 'react';
import logo from './logo.svg';

class Footer extends Component {
  render() {
    return (
      <div className="row Footer">
        <div className="col-md-6">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="made-with"><a href="https://github.com/yoonslee/demo-day-app">Demo Day App</a> made with React</span>
        </div>
        <div className="col-md-6">
          <h1>Free Resume!</h1>
          <p>Enter your email to receive a PDF resume! Limited time offer.</p>
          <input type="email" name="email" placeholder="jdoe@gmail.com" className="form-control" />
          <button className="btn btn-success">Send Me a Digital Copy of Yoon Lee's Resume When You Get a Chance</button>
        </div>
      </div>
    );
  }
}

export default Footer;
