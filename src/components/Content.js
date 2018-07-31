import React, {Component} from 'react'
import Ufo from './Ufo';

const axios = require('axios');

export default class Content extends Component {
  render() {
      return (
          <div className='App-content-body'>
              <p>{this.props.bodyHeader}</p>
              <Ufo/>
          </div>
      )
  }
}