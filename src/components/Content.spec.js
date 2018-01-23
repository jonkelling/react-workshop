import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme';

import Content from './Content'

describe('Content', () => {

  function getProps() {

  }

  beforeEach(() => {
    // wrapper = shallow(<Content {...getProps()} />);
  })

  afterEach(() => {
  })

  it('returns empty string when date is 12/31/1969', () => {
      const testData = [
          { film_date: '0' }
      ]
    const wrapper = shallow(<Content tedTalks={testData} />);
    expect(wrapper.find('td').first().text()).toBe('');
  })
})
