import './App.css'

import React, {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return <div className="App">
      <Header />
      < Content content="Coming again to save the motherfuckin day, yeah…" / >
    </div>
  }
}

export default App
