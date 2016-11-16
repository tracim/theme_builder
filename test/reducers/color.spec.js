import { expect } from 'chai'

import { initColor, resetColor, changeColor } from '../../app/action-creators.js'
import reducer from '../../app/reducers/color.js'

import { defaultStore } from '../../app/defaultStore.js'

import state_color_test from '../state_color_test.js'

describe('Color reducer', () => {
  it('should return its initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(defaultStore.color)
  })

  it('should reset the colors', () => {
    expect(reducer(state_color_test, resetColor())).to.deep.equal(defaultStore.color)
  })

  it('should return the colors set in param', () => {
    expect(reducer(undefined, initColor(state_color_test))).to.deep.equal(state_color_test)
  })

  it('should change only the color set in param', () => {
    const state_color_updated = state_color_test

    //state_color_updated[0] = Object.assign({}, state_color_updated[0], {name: 'brand-primary', hex: '#ffffff'})
    state_color_updated[0] = {
      ...state_color_updated[0],
      name: 'brand-primary',
      hex: '#ffffff'
    }

    expect(reducer(state_color_test, changeColor('brand-primary', '#ffffff'))).to.deep.equal(state_color_updated)
  })
})
