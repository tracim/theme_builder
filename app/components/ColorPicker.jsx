import React from 'react'
import { ChromePicker } from 'react-color'

export function ColorPicker ({ pickerInfo, onClosePicker, onChangeColor, onChangeColorComplete, onKeyPress, setInputFocus }) {
  return (
    <div className='colorpicker'>
      <div className='colorpicker__head'>
        <span className='colorpicker__head__colorname'>{ pickerInfo.label }</span>
        <span className='colorpicker__head__close' onClick={onClosePicker}>
          <i className='fa fa-close' />
        </span>
      </div>
      <ChromePicker
        disableAlpha
        color={pickerInfo.hex}
        onChange={(newColor) => onChangeColor(pickerInfo.name, newColor.hex)}
        onChangeComplete={(newColor) => onChangeColorComplete(pickerInfo.name, newColor.hex)}
        onKeyPress={onKeyPress}
        setInputFocus={setInputFocus}
      />
    </div>
  )
}

export default ColorPicker
