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
  }

  // the syntaxe bellow is viable thx to babel plugin transform-class-properties. It avoids having to bind this to the function in the constructor
  buildColor = () => {
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
          <button id="buildColors" className="form__btn btn btnBuild" onClick={this.buildColor}>
            { __().btnValidate }
          </button>

          { colorList.map((item, i) => !item.advancedOpt && <ColorItem colorItem={item} key={i} />) }

          <div className="form__advancedopt">
            <div className="form__advancedopt__toggle" onClick={() => dispatch(toggleAdvOpt())}>
              { __().btnAdvOpt }{ showAdvancedOpt ? ' v' : ' x' }
            </div>

            { showAdvancedOpt && colorList.map((item, i) => item.advancedOpt && <ColorItem colorItem={item} key={i} />) }

          </div>
        </div>
        { displayColorPicker && <ColorPicker /> }
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
