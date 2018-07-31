import './App.css'

import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="App">
      <Header header = "UFOs Fuck Yeah!" />
      <Content content="Coming again to save the motherfuckin day, yeah…" />
      <Footer footer="They are out there" />
    </div>
  }
}

export default App
