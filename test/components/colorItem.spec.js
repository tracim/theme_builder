import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

import ColorItem from '../../app/components/ColorItem.jsx'

chai.use(chaiEnzyme())

describe('<ColorItem />', () => {
  it('should render correctly and handle the click', () => {
    const propColorItem = {
      label: {
        fr: 'test-primary-fr',
        en: 'test-primary-en'
      },
      hex: '#BADA55'
    }
    const onOpenPicker = sinon.spy()
    const wrapper = shallow(<ColorItem colorItem={propColorItem} lang={'fr'} onOpenPicker={onOpenPicker} isOpen={true} />)

    expect(wrapper.find('div.form__label__detail')).to.contain.text('test-primary-fr')
    expect(wrapper.find('div.form__input__selector')).to.contain.text('#BADA55')

    wrapper.find('div.form__input__wrapper').simulate('click')
    expect(onOpenPicker).to.have.property('callCount', 1)
  })
})
