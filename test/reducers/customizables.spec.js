import { expect } from 'chai'

import { initCustomizables, resetCustomizables, changeCustomizables } from '../../app/action-creators.js'
import reducer from '../../app/reducers/customizables.js'

import { defaultStore } from '../../app/defaultStore.js'

import state_customizables_test from '../state_customizables_test.js'

describe('Customizables reducer', () => {
  it('should return its initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(defaultStore.customizables)
  })

  it('should reset the colors', () => {
    expect(reducer(state_customizables_test, resetCustomizables())).to.deep.equal(defaultStore.customizables)
  })

  it('should return the colors set in param', () => {
    expect(reducer(undefined, initCustomizables(state_customizables_test))).to.deep.equal(state_customizables_test)
  })

  it('should change only the color set in param', () => {
    const state_color_updated = state_customizables_test

    state_color_updated[0] = {
      ...state_color_updated[0],
      fields: state_color_updated[0].fields.map(field => field.name === 'brand-primary' ? {...field, hex: '#ffffff'} : field)
    }

    expect(reducer(state_customizables_test, changeCustomizables('brand-primary', '#ffffff'))).to.deep.equal(state_color_updated)
  })
})
