import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ContentOne from './ContentOne';
import ContentTwo from './ContentTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-row header-row">
          <Header />
        </div>
        <div className="app-row content-row">
          <div className="col-half">
            <ContentOne />
          </div>
          <div className="col-half">
            <ContentTwo />
          </div>
        </div>
        <div className="app-row footer-row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
