import './App.css'

import React, {Component} from 'react'
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-heading App-flex">
        <Header text="CENT 2 BEST 2" />
      </div>
      <div className="App-content App-flex">
        <Content/>
      </div>
      <Footer/>
    </div>
  }
}

export default App
