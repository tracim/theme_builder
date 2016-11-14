import React from 'react'
import { connect } from 'react-redux'

import { openPicker, closePicker } from '../action-creators.js'

import { store } from '../store.js'

export class ColorItem extends React.Component {

  handleOpenPicker = () => {
    const { colorItem, dispatch } = this.props

    if (store.getState().colorPicker.name === colorItem.name) dispatch(closePicker())
    else dispatch(openPicker(colorItem.name, colorItem.hex))
  }

  render () {
    const { activeLang, colorItem } = this.props

    const styleFormInputPreview = {
      backgroundColor: colorItem.hex
    }

    return (
      <div className='form__input__wrapper'>
        <label className='form__label'>
          <div className='form__label__detail'>
            {activeLang === 'fr' && colorItem.label.fr}
            {activeLang === 'en' && colorItem.label.en}
          </div>
        </label>
        <div className='form__input'>
          <div className='form__input__selector' onClick={this.handleOpenPicker}>
            {colorItem.hex}
          </div>
          <div className='form__input__preview' style={styleFormInputPreview} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ lang }) => ({ activeLang: lang })

export default connect(mapStateToProps)(ColorItem)
