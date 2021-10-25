import { h } from 'preact'
import NotFound from '../src/routes/not-found'
import { shallow } from 'enzyme'

describe('Test not-found contents', () => {
  test('NotFound header is "not found"', () => {
    const context = shallow(<NotFound />)
    expect(context.find('h1').text()).toBe('Not Found — Error 404')
  })
})
