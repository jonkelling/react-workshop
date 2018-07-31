import React, {Component} from 'react'
import PropTypes from 'prop-types';
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

Content.propTypes = {
    bodyHeader: PropTypes.string,
}