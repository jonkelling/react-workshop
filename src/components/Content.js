import React, {Component} from 'react'
import Ufo from './Ufo';

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