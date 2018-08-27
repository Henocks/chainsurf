import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import logo from './chainsurf_tmp_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          title="Chain.surf"
          meta={[
            {"name": "Chain.surf", "content": "Chain.surf : track & surf all bliockchain networks."},
            {property: "og:type", content: "Chain.surf"},
            {property: "og:title", content: "Chain.surf"},
            {property: "og:image", content: ""},
            {property: "og:url", content: "http://chain.surf"}
          ]}
        />
        <header className="App-header">
          <h1 className="App-title">Welcome to Chain.surf</h1>
        </header>
        <img src={logo} alt="logo" />
        <p className="App-intro">
          Chain.surf is all-in-one blockchain tracking platform
        </p>
      </div>
    );
  }
}

export default App;
