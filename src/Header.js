import React, { Component } from 'react';
import Clock from './Clock';
import Bitcoin from './Bitcoin';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="app-title">Welcome to Demo Day!</h1>
        <Clock />
        <Bitcoin />
      </div>
    );
  }
}

export default Header;
