import React from 'react'

export function ColorItem ({ colorItem, lang, onOpenPicker, isOpen }) {
  const styleFormInputPreview = {
    backgroundColor: colorItem.hex
  }

  let labelForLang
  if (lang === 'fr') labelForLang = colorItem.label.fr
  else if (lang === 'en') labelForLang = colorItem.label.en
  else labelForLang = colorItem.label.en
  // const labelForLang = (({fr, en}) => lang === 'fr' ? fr : lang === 'en' && en)(colorItem.label)

  return (
    <div className={isOpen ? 'form__input__wrapper active' : 'form__input__wrapper'} onClick={onOpenPicker}>
      <label className='form__label'>
        <div className='form__label__detail'>
          {labelForLang}
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
