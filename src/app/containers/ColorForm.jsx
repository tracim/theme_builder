import React from 'react'
import { connect } from 'react-redux'
import ColorItem from './ColorItem.jsx'
import ColorPicker from './ColorPicker.jsx'
import Dialog from '../components/Dialog.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { resetColor, changeLang, toggleAdvOpt } from '../action-creators.js'

import __ from '../trad.js'

import 'whatwg-fetch' // fetch polyfill https://github.com/github/fetch

export class ColorForm extends React.Component {

  constructor () {
    super()

    this.state = {
      displayResetDialog: false,
      displayBuildDialog: false
    }
  }

  handleResetColor = () => {
    this.props.dispatch(resetColor())
    this.handleCloseDialog()
  }

  handleCloseDialog = () => this.setState({ displayResetDialog: false, displayBuildDialog: false })
  handleOpenResetDialog = () => this.setState({ displayResetDialog: true, displayBuildDialog: false })
  handleOpenBuildDialog = () => this.setState({ displayResetDialog: false, displayBuildDialog: true })

  // the syntaxe bellow is viable thx to babel plugin transform-class-properties. It avoids having to bind 'this' to the function in the class' constructor
  handleBuildColor = () => {
    // if (self.fetch) console.log('fetch is native')
    // else console.log('fetch is polyfill')

    const varList = {}
    this.props.colorList.forEach((item) => (varList[item.name] = item.hex))

    fetch('http://tracim-theme.dev.algoo.fr/api/generate-css', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ variables: varList })
    })
    .then(response => response.text())
    .then(function (responseText) {
      console.log(responseText)
      // Todo : envoyer responseText à tracim instance, need end point
    })
    .catch(function (e) {
      console.log('Error in generate-css request :')
      console.log(e)
    })
  }

  handleLangSelection = (e) => {
    e.persist()
    this.props.dispatch(changeLang(e.target.value))
  }

  render () {
    // if (item.advancedOpt === false || (item.advancedOpt === true && this.props.showAdvancedOpt === true)) // test to get all displayable options

    const { activeLang, showAdvancedOpt, colorList, displayColorPicker, dispatch } = this.props

    return (
      <div className='form__wrapper'>
        <div className='form'>
          <div className='form__lang'>
            <label htmlFor='langSelector'>
              { __().labelSelectLang }
            </label>
            <select id='langSelector' onChange={this.handleLangSelection} value={activeLang}>
              <option value='en'>English</option>
              <option value='fr'>Français</option>
            </select>
          </div>
          <button id='resetColors' className='form__btn btn' onClick={this.handleOpenResetDialog} title={__().btnReset}>
            <i className='fa fa-lg fa-step-backward' />
          </button>
          <button id='buildColors' className='form__btn btn btnBuild' onClick={this.handleOpenBuildDialog} title={__().btnValidate} >
            <i className='fa fa-lg fa-gears' />
          </button>

          { colorList.map((item, i) => !item.advancedOpt && <ColorItem colorItem={item} key={i} />) }

          <div className='form__advancedopt'>
            <div className='form__advancedopt__toggle' onClick={() => dispatch(toggleAdvOpt())}>
              { showAdvancedOpt ? 'v' : 'x' }{ __().btnAdvOpt }
            </div>
            <ReactCSSTransitionGroup transitionName='advOptLineAnim' transitionEnterTimeout={300} transitionLeaveTimeout={200}>
              { showAdvancedOpt && <div className='advOptLineAnim' /> }
            </ReactCSSTransitionGroup>

            <div className='form__advancedopt__list'>
              { showAdvancedOpt && colorList.map((item, i) => item.advancedOpt && <ColorItem colorItem={item} key={i} />) }
            </div>

          </div>

          {/* Reset Dialog */}
          <Dialog
            display={this.state.displayResetDialog}
            msg={__().dialogReset}
            onValidate={this.handleResetColor}
            onCancel={this.handleCloseDialog}
          />
          {/* Build Dialog */}
          <Dialog
            display={this.state.displayBuildDialog}
            msg={__().dialogBuild}
            onValidate={this.handleBuildColor}
            onCancel={this.handleCloseDialog}
          />
        </div>
        <ReactCSSTransitionGroup transitionName='colorpickerAnim' transitionEnterTimeout={400} transitionLeaveTimeout={250}>
          { displayColorPicker && <ColorPicker key='colorpicker' /> }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}

const mapStateToProps = ({ lang, showAdvancedOpt, color, colorPicker: {display} }) => ({
  showAdvancedOpt,
  activeLang: lang,
  colorList: color,
  displayColorPicker: display
})

export default connect(mapStateToProps)(ColorForm)
