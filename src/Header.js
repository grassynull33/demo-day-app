import React, { Component } from 'react';
import Clock from './Clock';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="app-title">#DEMODAY<span className="app-version">v1.3 alpha 23</span></h1>
        <Clock />
      </div>
    );
  }
}

export default Header;
