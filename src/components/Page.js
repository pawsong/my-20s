import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import './Page.css';

class Page extends Component {
  handleWaypointEnter = () => {
    this.props.onEnter(this.props.bg, this.props.dark);
  }

  render() {
    return (
      <div className={`Page ${this.props.className || ''}`}>
        <Waypoint
          onEnter={this.handleWaypointEnter}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
