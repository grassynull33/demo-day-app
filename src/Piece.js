import React, { Component } from 'react';

class Piece extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter() {
    this.setState({text: this.props.desc});
  }

  handleLeave() {
    this.setState({text: this.props.title});
  }

  componentDidMount() {
    this.setState({text: this.props.title});
  }

  render() {
    const text = this.state.text;

    return (
      <a href={this.props.link} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <div className="Piece">
          {text}
          {/* <div className="piece_title">{this.props.title}</div>
          <span className="piece_desc">{this.props.desc}</span>
          <div className="piece-type-container">
            {
              this.props.type
                .map((i) =>
                  <span key={i} className="piece_type">{i}</span>
                )
            }
          </div>
          <div className="piece-tech-container">
            {
              this.props.tech
                .map((i) =>
                  <span key={i} className="piece_tech">{i}</span>
                )
            }
          </div> */}
        </div>
      </a>
    );
  }
}

export default Piece;
