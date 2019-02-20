import React, { Component } from 'react';
import './App.css';
import Images from './components/Images'

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="container">
          <div className="header content">
            <h1 className="title is-1">
              Unsplash React Gallery
            </h1>
          </div>
          {/* <img src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif" alt="loading" /> */}
          <Images />
        </div>
      </div>
    );
  }
}

export default App;
