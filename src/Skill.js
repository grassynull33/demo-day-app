import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        <span className="skill_name">{this.props.skill}</span>
        <span className="skill_version">{this.props.version}</span>
        <span className="skill_category">{this.props.category}</span>
        {
          this.props.starred &&
            <span className="skill_starred">Starred</span>
        }
      </div>
    );
  }
}

export default Skill;
