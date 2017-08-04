import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
      <div className={`Skill skill_${this.props.category}`}>
        <span className="skill_name">{this.props.skill}</span>
        <span className="skill_version">{this.props.version}</span>
        {/* <span className="skill_category">{this.props.category}</span> */}
        {
          this.props.starred &&
            <span className="glyphicon glyphicon-star starred-icon"></span>
        }
      </div>
    );
  }
}

export default Skill;
