import React from 'react'
import { connect } from 'react-redux'

import { openPicker } from '../action-creators.js'

export class ColorItem extends React.Component {

  render () {
    const { activeLang, colorItem, dispatch } = this.props

    const styleFormInputPreview = {
      backgroundColor: colorItem.hex
    }

    return (
      <div className='form__input__wrapper'>
        <label className='form__label'>
          {/* @{this.props.colorItem.name} */}
          <div className='form__label__detail'>
            {activeLang === 'fr' ? colorItem.label.fr : null}
            {activeLang === 'en' ? colorItem.label.en : null}
          </div>
        </label>
        <div className='form__input'>
          <div className='form__input__selector' onClick={() => dispatch(openPicker(colorItem.name, colorItem.hex))}>
            {colorItem.hex}
          </div>
          <div className='form__input__preview' style={styleFormInputPreview} />
        </div>
      </div>
    )
  }

}

ColorItem.propTypes = {
  value: React.PropTypes.object
}

const mapStateToProps = ({ lang }) => ({ activeLang: lang })

export default connect(mapStateToProps)(ColorItem)
