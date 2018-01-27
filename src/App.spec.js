import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import App from './App'
import { shallow } from 'enzyme';

describe('App component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  afterEach(() => {
  })

  it('displays a welcome message', () => {
    expect(wrapper.text()).toContain('')
  })
})
