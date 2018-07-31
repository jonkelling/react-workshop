import './App.css'

import React, {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <Content />
      <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">React</span></h2>
        <img className="App-logo" src={require('./react.svg')}/>
      </div>
      <Footer />
    </div>
  }
}

export default App
