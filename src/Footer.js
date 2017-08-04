import React, { Component } from 'react';
import logo from './logo.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <img src={logo} className="App-logo" alt="logo" />
        Made with React
        <h1>Free Resumes</h1>
        <p>Ask for a paper copy or enter your email for PDF:</p>
        <input type="email" name="email" placeholder="jdoe@gmail.com" />
        <button className="btn btn-success">Send Me Yoon Lee's Resume When You Get a Chance</button>
      </div>
    );
  }
}

export default Footer;
