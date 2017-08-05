import React, { Component } from 'react';
import logo from './logo.svg';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({email: event.target.email.value});
  }

  render() {
    return (
      <div className="row Footer">
        <div className="col-md-6">
          <span className="made-with"><a href="https://github.com/yoonslee/demo-day-app">Demo Day App</a> made with React</span>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-md-6">
          <h1 className="resume-header">Free Resume!</h1>
          <p>Enter your email to receive a PDF resume! Limited time offer.</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="email" placeholder="jdoe@gmail.com" className="form-control" />
            <input type="submit" className="btn btn-success" value="Send Me a Digital Copy of Yoon's Resume When You Get a Chance" />
          </form>

        </div>
      </div>
    );
  }
}

export default Footer;
