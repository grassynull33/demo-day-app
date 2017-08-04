import React, { Component } from 'react';

class Piece extends Component {
  render() {
    return (
      <div className="Piece">
        <span className="piece_title">{this.props.title}</span>
        <span className="piece_desc">{this.props.desc}</span>
        
        {
          this.props.type
            .map((i) =>
              <span className="piece_type">{i}</span>
            )
        }

        {
          this.props.tech
            .map((i) =>
              <span className="piece_tech">{i}</span>
            )
        }
        
        <span className="piece_link">{this.props.link}</span>
      </div>
    );
  }
}

export default Piece;
