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

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="ContentTwo">
        <h1>Portfolio</h1>
        {
          this.state.portfolio
            .map((i) =>
              <Piece key={i.title} title={i.title} desc={i.desc} type={i.type} tech={i.tech} link={i.link} />
            )
        }
        <h1>Bitcoin (BTC) vs. Bitcoin Cash (BCH)</h1>

      </div>
    );
  }
}

export default ContentTwo;
