import { h } from 'preact'
import { ReactElement } from 'react'
import Footer from '../src/components/footer'
import { shallow } from 'enzyme'

describe('Test footer contents', () => {
  test('Footer copyright year is this year', () => {
    const context = shallow(<Footer /> as ReactElement)
    expect(context.find('#copyright-year').text()).toBe((new Date().getFullYear()).toString())
  })
})
