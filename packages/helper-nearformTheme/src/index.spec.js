import React from 'react'
import { mount, render } from 'enzyme'

import demoTheme from '.'

describe('Demo Theme', function() {

  it('exports the theme object', () => {
    const expected = expect.objectContaining({
      primary: expect.any(String),
      secondary: expect.any(String),
    })

    expect(demoTheme).toEqual(expected)
  })

})
