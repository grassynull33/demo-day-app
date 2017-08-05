import React, { Component } from 'react';
import Clock from './Clock';
// import Bitcoin from './Bitcoin';

class Header extends Component {
  render() {
    return (
      <div className="row Header">
        <div className="col-md-6 header-col">
          <h1 className="app-title">Welcome to Demo Day!</h1>
        </div>
        <div className="col-md-6 header-col">
          <Clock />
          {/* <Bitcoin /> */}
        </div>
      </div>
    );
  }
}

export default Header;
