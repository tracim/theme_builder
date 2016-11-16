import { expect } from 'chai'

import { openPicker, closePicker, updateInitPicker } from '../../app/action-creators.js'
import reducer from '../../app/reducers/colorPicker.js'

describe('ColorPicker reducer', () => {
  it('should return its initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      display: false,
      name: '',
      hex: '#ffffff'
    })
  })

  const init = {
    display: false,
    name: 'fake_name',
    hex: 'fake_hex'
  }

  it('should set the value to open with an associated color', () => {
    expect(reducer(init, openPicker('brand-primary', '#BADA55'))).to.deep.equal({
      display: true,
      name: 'brand-primary',
      hex: '#BADA55'
    })
  })

  it('should set the value to close and reset its name and hex values', () => {
    expect(reducer(init, closePicker())).to.deep.equal({
      display: false,
      name: '',
      hex: '#ffffff'
    })
  })

  it('should set the value of color name and hex without seting display', () => {
    expect(reducer(init, updateInitPicker('brand-primary', '#BADA55'))).to.deep.equal({
      display: false,
      name: 'brand-primary',
      hex: '#BADA55'
    })
  })
})
