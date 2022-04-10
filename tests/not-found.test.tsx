import { h } from 'preact'
import { ReactElement } from 'react'
import NotFound from '../src/routes/not-found'
import { shallow } from 'enzyme'

describe('Test not-found contents', () => {
  test('NotFound header is "not found"', () => {
    const context = shallow(<NotFound /> as ReactElement)
    expect(context.find('h1').text()).toBe('Not Found — Error 404')
  })
})
