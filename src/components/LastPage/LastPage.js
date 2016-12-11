import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Page from '../Page';
import createFire from './createFire';
import './LastPage.css';

class LastPage extends Component {
  componentDidMount() {
    const container = findDOMNode(this.refs['content']);
    createFire(container);
  }

  render() {
    return (
      <Page {...this.props} bg="And...">
        <div
          className="PageLast-container"
          ref="content"
        />
        <div className="LastPage-message">
          <p>
            Now at the entrance of my 30s,
            <br />
            I think of being a problem solver.
          </p>
          <p>
            I may learn politics and business sooner or later,
            <br />
            but do not want to forget the problem
            <br />
            what I tried to solve at the first time.
          </p>
        </div>
      </Page>
    );
  }
}

export default LastPage;
