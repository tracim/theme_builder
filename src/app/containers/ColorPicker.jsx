import React from 'react'
import { connect } from 'react-redux'
import { ChromePicker } from 'react-color'
import { changeColor, closePicker, updateInitPicker } from '../action-creators.js'

import __ from '../trad.js'

export class ColorPicker extends React.Component {

  render () {
    const { colorName, colorHex, dispatch } = this.props

    return (
      <div className='colorpicker'>
        <div className='colorpicker__head'>
          <span className='colorpicker__head__colorname'>
            { __().colorPickerLabel }
          </span>
          <span className='colorpicker__head__close' onClick={() => dispatch(closePicker())}>
            <i className='fa fa-close' />
          </span>
        </div>
        <ChromePicker
          disableAlpha
          color={colorHex}
          onChange={(newColor) => dispatch(changeColor(colorName, newColor.hex))}
          onChangeComplete={(newColor) => dispatch(updateInitPicker(colorName, newColor.hex))}
        />
      </div>
    )
  }

}

function mapStateToProps ({ lang, colorPicker }) {
  return {
    lang: lang,
    colorName: colorPicker.name,
    colorHex: colorPicker.hex
  }
}

export default connect(mapStateToProps)(ColorPicker)
