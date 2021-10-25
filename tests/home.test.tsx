import { h } from 'preact'
import Home from '../src/routes/home'
import { shallow } from 'enzyme'

describe('Test home page contents', () => {
  test('Home header is as expected', () => {
    const context = shallow(<Home />)
    expect(context.find('h1').text()).toBe('Polynumber.com')
  })
})
