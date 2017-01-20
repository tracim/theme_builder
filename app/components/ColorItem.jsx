import React from 'react'

export function ColorItem ({ colorItem, lang, onOpenPicker, isOpen }) {
  const styleFormInputPreview = {
    backgroundColor: colorItem.hex
  }

  return (
    <div className={isOpen ? 'form__input__wrapper active' : 'form__input__wrapper'} onClick={onOpenPicker}>
      <label className='form__label'>
        <div className='form__label__detail'>
          {colorItem.label[lang]}
        </div>
      </label>
      <div className='form__input'>
        <div className='form__input__selector'>
          {colorItem.hex}
        </div>
        <div className='form__input__preview' style={styleFormInputPreview} />
      </div>
    </div>
  )
}

ColorItem.propTypes = {
  colorItem: React.PropTypes.object.isRequired,
  lang: React.PropTypes.string.isRequired,
  onOpenPicker: React.PropTypes.func.isRequired,
  isOpen: React.PropTypes.bool
}

export default ColorItem
