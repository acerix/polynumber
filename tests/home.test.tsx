import { h } from 'preact'
import { ReactElement } from 'react'
import Home from '../src/routes/home'
import { shallow } from 'enzyme'

describe('Test home page contents', () => {
  test('Home header is as expected', () => {
    const context = shallow(<Home /> as ReactElement)
    expect(context.find('h1').text()).toBe('Polynumber.com')
  })
})
