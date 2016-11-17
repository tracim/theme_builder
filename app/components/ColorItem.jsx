import React from 'react'

export function ColorItem (props) {
  const { colorItem, lang, onOpenPicker } = props

  const styleFormInputPreview = {
    backgroundColor: colorItem.hex
  }

  // let labelForLang
  // if (lang === 'fr') labelForLang = colorItem.label.fr
  // else if (lang === 'en') labelForLang = colorItem.label.en
  const labelForLang = (({fr, en}) => lang === 'fr' ? fr : lang === 'en' && en)(colorItem.label)

  return (
    <div className='form__input__wrapper'>
      <label className='form__label'>
        <div className='form__label__detail'>
          {labelForLang}
        </div>
      </label>
      <div className='form__input'>
        <div className='form__input__selector' onClick={onOpenPicker}>
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
  onOpenPicker: React.PropTypes.func.isRequired
}

export default ColorItem
