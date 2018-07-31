import './App.css'

import React, {Component} from 'react'
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-heading App-flex">
        <div>
          <Header text='CENTARE TEAM 2 REACT-ING to UFOS'/>
          <p className='App-heading-subtext'>UFO are cools, read about sightnings below!</p>
        </div>
      </div>
      <div className="App-content App-flex">
        <Content bodyHeader=''/>
      </div>
      <Footer text='© 2018 Centare Team 2'/>
    </div>
  }
}

export default App
