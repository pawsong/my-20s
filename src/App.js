import React, { Component } from 'react';
import Page from './components/Page';
import './App.css';
import LastPage from './components/LastPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bg: '', dark: false };
  }

  handlePageEnter = (bg, dark) => {
    console.log(bg, dark);
    this.setState({ bg, dark });
  }

  render() {
    return (
      <div className={`App ${this.state.dark ? 'App-dark' : ''}`}>
        <div className="App-bg">{this.state.bg}</div>
        <Page bg="" onEnter={this.handlePageEnter} dark={false}>
          <p>My 20s</p>
        </Page>
        <Page bg="20" onEnter={this.handlePageEnter} dark={false}>
          <p>I dreamed of being a musician.</p>
        </Page>
        <Page bg="21" onEnter={this.handlePageEnter} dark={false}>
          <p>
            It took two years to give up the dream.
            <br />
            I learned I have to do what I can do well.
          </p>
        </Page>
        <div className="App-20s-pages">
          <Page bg="22" onEnter={this.handlePageEnter} dark={false}>
            <p>
              And I studied hard for my major, electronic engineering.
              <br />
              It was what I can do well.
            </p>
          </Page>
          <Page bg="23" onEnter={this.handlePageEnter} dark={false}>
            <p>But after a year, I began to pursue a vague "humanity" thing.</p>
            <p>Being a wandering writer was my second dream,<br />so I prepared exam for diplomat.</p>
          </Page>
          <Page bg="24" onEnter={this.handlePageEnter} dark={false}>
            <p>I failed and gave up.</p>
            <p>I came back to school<br />and planned to do the mandatory military duty.</p>
          </Page>

          <Page bg="25" onEnter={this.handlePageEnter} dark={true}>
            <p>And as alternative military service,<br />I started to work as a software engineer.</p>
            <p>Coding life began!</p>
          </Page>
          <Page bg="26" onEnter={this.handlePageEnter} dark={true}>
            <p>I experienced in various fields in software.</p>
          </Page>
          <Page bg="27" onEnter={this.handlePageEnter} dark={true}>
            <p>And became a lead programmer for a game service.<br />I worked really hard.</p>
          </Page>
          <Page bg="28" onEnter={this.handlePageEnter} dark={true}>
            <p>Military duty was done, and I prepared graduation.</p>
            <p>
              And fortunately, at a private academy for classics,
              <br />
              I learned the limitation of "concepts" and life's immortality.
            </p>
          </Page>
          <Page bg="29" onEnter={this.handlePageEnter} dark={true}>
            <p>I found a problem to solve, and prepared a business for it.</p>
          </Page>
        </div>
        <LastPage onEnter={this.handlePageEnter} dark={true} />
      </div>
    );
  }
}

export default App;
