import React, { Component } from 'react';
import portfolio from './portfolio.json';
import Piece from './Piece';

class ContentTwo extends Component {
  constructor() {
    super();
    this.state = {
      portfolio: portfolio.portfolio
    };
  }

  render() {
    return (
      <div className="ContentTwo">
        <h1>Portfolio<small className="filter-text">hover to see description</small></h1>
        <div className="portfolio-container">
          {
            this.state.portfolio
              .map((i) =>
                <Piece key={i.title} title={i.title} desc={i.desc} type={i.type} tech={i.tech} link={i.link} />
              )
          }
        </div>
      </div>
    );
  }
}

export default ContentTwo;
