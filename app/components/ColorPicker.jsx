import React from 'react'
import { ChromePicker } from 'react-color'

import __ from '../trad.js'

export function ColorPicker ({ colorName, colorHex, onClosePicker, onChangeColor, onChangeColorComplete }) {
  return (
    <div className='colorpicker'>
      <div className='colorpicker__head'>
        <span className='colorpicker__head__colorname'>
          { __().colorPickerLabel }
        </span>
        <span className='colorpicker__head__close' onClick={onClosePicker}>
          <i className='fa fa-close' />
        </span>
      </div>
      <ChromePicker
        disableAlpha
        color={colorHex}
        onChange={(newColor) => onChangeColor(colorName, newColor.hex)}
        onChangeComplete={(newColor) => onChangeColorComplete(colorName, newColor.hex)}
      />
    </div>
  )
}

export default ColorPicker
