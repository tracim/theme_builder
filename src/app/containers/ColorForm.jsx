import React from 'react'
import { connect } from 'react-redux'
import ColorItem from './ColorItem.jsx'
import ColorPicker from './ColorPicker.jsx'

import { resetColor, changeLang, toggleAdvOpt } from "../action-creators.js"

import __ from "../trad.js"

import "whatwg-fetch" // fetch polyfill https://github.com/github/fetch // @TODO: is this usefull ?

export class ColorForm extends React.Component {

  constructor() {
    super()
    this.buildColor = this.buildColor.bind(this)
  }

  buildColor() {
    // if (self.fetch) console.log('fetch is native')
    // else console.log('fetch is polyfill')

    const varList = {}
    this.props.colorList.forEach((item) => varList[item.name] = item.hex)

    fetch('http://tracim-theme.dev.algoo.fr/api/generate-css', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ variables: varList })
    })
    .then(response => response.text())
    .then(function(responseText) {
      console.log(responseText)
      // Todo : envoyer responseText à tracim instance, need end point
    })
    .catch(function (e) {
      console.log("Error in generate-css request :")
      console.log(e)
    })
  }

  render() {
    //if (item.advancedOpt === false || (item.advancedOpt === true && this.props.showAdvancedOpt === true)) // test to get all displayable options

    const { colorList, activeLang, showAdvancedOpt, displayColorPicker, dispatch } = this.props

    const compColorList = colorList.map((item, index) => item.advancedOpt === false
      ? <ColorItem colorItem={item} key={index} />
      : null
    )
    const compColorListAdvOpt = colorList.map((item, index) => item.advancedOpt === true
      ? <ColorItem colorItem={item} key={index} />
      : null
    )

    return (
      <div className="form__wrapper">
        <div className="form">
          <div className="form__lang">
            <label htmlFor="langSelector">
              { __().labelSelectLang }
            </label>
            <select id="langSelector" onChange={(e) => dispatch(changeLang(e))} value={activeLang}>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <button id="resetColors" className="form__btn btn" onClick={() => dispatch(resetColor())}>
            { __().btnReset }
          </button>
          <button id="buildColors" className="form__btn btn btnBuild" onClick={this.buildColors}>
            { __().btnValidate }
          </button>

          { compColorList }

          <div className="form__advancedopt">
            <div className="form__advancedopt__toggle" onClick={() => dispatch(toggleAdvOpt())}>
              { __().btnAdvOpt }{ showAdvancedOpt ? ' v' : ' x' }
            </div>

            { showAdvancedOpt ? compColorListAdvOpt : null }

          </div>
        </div>
        { displayColorPicker ? <ColorPicker /> : null }
      </div>
    )
  }

}

const mapStateToProps = ({ lang, showAdvancedOpt, color, colorPicker:{display, name, hex} }) => ({
  activeLang: lang,
  showAdvancedOpt: showAdvancedOpt,
  colorList: color,
  displayColorPicker: display,
  initColorPickerName: name,
  initColorPickerHex: hex,
})

export default connect(mapStateToProps)(ColorForm)
