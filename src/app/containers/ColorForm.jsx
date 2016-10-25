import React from "react"
import { connect } from "react-redux"
import ColorItem from "./ColorItem.jsx"
import ColorPicker from "./ColorPicker.jsx"
import ResetColorDialog from "../components/Dialog.jsx"
import BuildColorDialog from "../components/Dialog.jsx"

import { resetColor, changeLang, toggleAdvOpt } from "../action-creators.js"

import __ from "../trad.js"

import "whatwg-fetch" // fetch polyfill https://github.com/github/fetch // @TODO: is this usefull ?

export class ColorForm extends React.Component {

  constructor() {
    super()

    this.state = {
      displayResetDialog: false,
      displayBuildDialog: false,
    }
  }

  handleResetColor = () => {
    this.props.dispatch(resetColor())
    this.handleCloseDialog()
  }

  handleCloseDialog     = () => this.setState({ displayResetDialog: false, displayBuildDialog: false, })
  handleOpenResetDialog = () => this.setState({ displayResetDialog: true,  displayBuildDialog: false, })
  handleOpenBuildDialog = () => this.setState({ displayResetDialog: false, displayBuildDialog: true,  })

  // the syntaxe bellow is viable thx to babel plugin transform-class-properties. It avoids having to bind "this" to the function in the class' constructor
  handleBuildColor = () => {
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
          <button id="resetColors" className="form__btn btn" onClick={this.handleOpenResetDialog}>
            { __().btnReset }
          </button>
          <button id="buildColors" className="form__btn btn btnBuild" onClick={this.handleOpenBuildDialog}>
            { __().btnValidate }
          </button>

          { colorList.map((item, i) => !item.advancedOpt && <ColorItem colorItem={item} key={i} />) }

          <div className="form__advancedopt">
            <div className="form__advancedopt__toggle" onClick={() => dispatch(toggleAdvOpt())}>
              { showAdvancedOpt ? 'v' : 'x' }{ __().btnAdvOpt }
            </div>

            { showAdvancedOpt && colorList.map((item, i) => item.advancedOpt && <ColorItem colorItem={item} key={i} />) }

          </div>

          <ResetColorDialog
            display={this.state.displayResetDialog}
            msg={__().dialogReset}
            onValidate={this.handleResetColor}
            onCancel={this.handleCloseDialog}
          />
          <BuildColorDialog
            display={this.state.displayBuildDialog}
            msg={__().dialogBuild}
            onValidate={this.handleBuildColor}
            onCancel={this.handleCloseDialog}
          />
        </div>
        { displayColorPicker && <ColorPicker /> } {/* shouldnn't the boolean be a local state instead of from the store ? */}
      </div>
    )
  }

}

const mapStateToProps = ({ lang, showAdvancedOpt, color, colorPicker:{display} }) => ({
  activeLang: lang,
  showAdvancedOpt: showAdvancedOpt,
  colorList: color,
  displayColorPicker: display,
})

export default connect(mapStateToProps)(ColorForm)
