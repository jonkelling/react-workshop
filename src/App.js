import './App.css'

import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="App">
      <Header text = "UFOs Fuck Yeah!" />
      <Content text="Coming again to save the motherfuckin day, yeah…" />
      <div> 
        <img src={"https://cdn.geekwire.com/wp-content/uploads/2017/12/171216-ufo2.jpg"} width={"25%"} />
      </div>
      <Footer text="They are out there" />
      
    </div>
  }
}

export default App
