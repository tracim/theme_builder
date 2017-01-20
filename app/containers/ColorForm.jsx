import React from 'react'
import { connect } from 'react-redux'
import ColorPicker from '../components/ColorPicker.jsx'
import ColorItem from '../components/ColorItem.jsx'
import { Dialog, DialogHelp } from '../components/Dialog.jsx'
// import DialogHelp from '../components/DialogHelp.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { resetColor, changeColor, changeLang, toggleAdvOpt, requestAsyncStart, requestAsyncEnd } from '../action-creators.js'

import __ from '../trad.js'

import 'whatwg-fetch' // fetch polyfill https://github.com/github/fetch

export class ColorForm extends React.Component {

  constructor () {
    super()

    this.state = {
      colorPicker: {
        display: false,
        name: '',
        label: '',
        hex: '#ffffff'
      },
      openedColor: '',
      displayHelpDialog: false,
      displayResetDialog: false,
      displayBuildDialog: false
    }
  }

  handleResetColor = () => {
    this.props.dispatch(resetColor())
    this.handleCloseDialog()
  }

  handleCloseDialog = () => this.setState({ ...this.state, displayHelpDialog: false, displayResetDialog: false, displayBuildDialog: false })
  handleOpenHelpDialog = () => this.setState({ ...this.state, displayHelpDialog: true, displayResetDialog: false, displayBuildDialog: false })
  handleOpenResetDialog = () => this.setState({ ...this.state, displayHelpDialog: false, displayResetDialog: true, displayBuildDialog: false })
  handleOpenBuildDialog = () => this.setState({ ...this.state, displayHelpDialog: false, displayResetDialog: false, displayBuildDialog: true })

  handleOpenPicker = ({name, label, hex}) => {
    const updatedColorPicker = name === this.state.colorPicker.name
      ? { name: '', label: '', hex: '#ffffff', display: false }
      : { name, label: label[this.props.activeLang], hex, display: true }

    this.setState({ ...this.state, colorPicker: updatedColorPicker, openedColor: name === this.state.colorPicker.name ? '' : name })
  }

  handleClosePicker = () => {
    this.setState({ ...this.state, colorPicker: { name: '', label: '', hex: '#ffffff', display: false }, openedColor: '' })
  }

  // function called on every color modification by the colorPicker. It update the Store to dynamically update the css of the preview
  handleChangeColor = (name, hex) => {
    this.props.dispatch(changeColor(name, hex))
  }

  // function called on mouse keyup of the colorPicker to update the initial state of the colorPicker which is saved as a local state of colorForm
  handleChangeColorComplete = (name, hex) => {
    this.setState({ ...this.state, colorPicker: {...this.state.colorPicker, name, hex, display: true} })
  }

  handleKeypressPicker = (e) => {
    if (e.keyCode === 13) this.handleClosePicker()
  }

  // the syntaxe bellow is viable thx to babel plugin transform-class-properties. It avoids having to bind 'this' to the function in the class' constructor
  handleBuildColor = () => {
    // if (self.fetch) console.log('fetch is native')
    // else console.log('fetch is polyfill')

    this.props.dispatch(requestAsyncStart()) // to show the loader
    this.handleCloseDialog()

    const varList = {}
    this.props.colorList.forEach((item) => (varList[item.name] = item.hex))

    fetch('http://theme.tracim.org/api/generate-css', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ variables: varList })
    })
    .then(response => response.text())
    .then(responseText => {
      const FileSaver = require('../lib/FileSaver.js')

      const blob = new Blob([responseText], { type: 'text/plain;charset=utf-8' })
      FileSaver.saveAs(blob, 'bootstrap.css')

      this.props.dispatch(requestAsyncEnd()) // to hide the loader
    })
    .catch((e) => console.log('Error in generate-css request :', e))
  }

  handleLangSelection = (e) => {
    e.persist()
    this.props.dispatch(changeLang(e.target.value))
  }

  render () {
    const { activeLang, showAdvancedOpt, colorList, isSaasInstance, dispatch } = this.props

    return (
      <div className='form__wrapper'>

        { false && // uncomment this and the bellow div
          <div>
            <div className='form__help' onClick={this.handleOpenHelpDialog}>
              <i className='fa fa-lg fa-lightbulb-o' aria-hidden='true' />
              <br />
              { __('labelHelpBtn') }
            </div>

            <DialogHelp
              display={this.state.displayHelpDialog}
              onValidate={this.handleCloseDialog}
            />
          </div>
        }

        <div className='form'>

          <div className='form__lang'>
            <label htmlFor='langSelector'>
              { __('labelSelectLang') }
            </label>
            <select id='langSelector' onChange={this.handleLangSelection} value={activeLang}>
              <option value='en'>English</option>
              <option value='fr'>Français</option>
            </select>
          </div>

          <button id='resetColors' className='form__btn btn' onClick={this.handleOpenResetDialog} title={__('btnReset')}>
            <i className='fa fa-lg fa-step-backward' />
          </button>

          <button id='buildColors' className='form__btn btn btnBuild' onClick={this.handleOpenBuildDialog} title={__('btnValidate')} >
            <i className='fa fa-lg fa-gears' />
          </button>

          <div className='clearfix' />

          <div className='form__input-all'>
            { colorList.map((item, i) => !item.advancedOpt &&
              <ColorItem colorItem={item} lang={activeLang} onOpenPicker={() => this.handleOpenPicker(item)} isOpen={this.state.openedColor === item.name} key={i} />)
            }
          </div>

          { false && // remove this test to uncomment this block. I dont comment it so I dont have to also comment all the var used in it because standard.js would whine
            <div className='form__advancedopt'>
              <div className='form__advancedopt__toggle' onClick={() => dispatch(toggleAdvOpt())}>
                { showAdvancedOpt ? <i className='fa fa-lg fa-chevron-down' /> : <i className='fa fa-lg fa-close' /> }
                { showAdvancedOpt ? __('btnAdvOptOpen') : __('btnAdvOptClose') }
              </div>
              <ReactCSSTransitionGroup transitionName='advOptLineAnim' transitionEnterTimeout={300} transitionLeaveTimeout={200}>
                { showAdvancedOpt && <div className='advOptLineAnim' /> }
              </ReactCSSTransitionGroup>

              <div className='form__advancedopt__list'>
                { showAdvancedOpt && colorList.map((item, i) => item.advancedOpt && <ColorItem colorItem={item} lang={activeLang} onOpenPicker={() => this.handleOpenPicker(item)} key={i} />) }
              </div>
            </div>
          }

          {/* Reset Dialog */}
          <Dialog
            display={this.state.displayResetDialog}
            msg={__('dialogReset')}
            onValidate={this.handleResetColor}
            onCancel={this.handleCloseDialog}
          />
          {/* Build Dialog */}
          <Dialog
            display={this.state.displayBuildDialog}
            msg={isSaasInstance ? __('dialogBuild') : __('dialogBuildSaas')}
            onValidate={this.handleBuildColor}
            onCancel={this.handleCloseDialog}
          />
        </div>
        <ReactCSSTransitionGroup transitionName='colorpickerAnim' transitionEnterTimeout={400} transitionLeaveTimeout={250}>
          { this.state.colorPicker.display &&
            <ColorPicker
              pickerInfo={this.state.colorPicker}
              onClosePicker={this.handleClosePicker}
              onChangeColor={this.handleChangeColor}
              onChangeColorComplete={this.handleChangeColorComplete}
              onKeyPress={this.handleKeypressPicker}
            />
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}

const mapStateToProps = ({ lang, showAdvancedOpt, color, config: { isSaasInstance } }) => ({
  showAdvancedOpt,
  isSaasInstance,
  activeLang: lang,
  colorList: color
})

export default connect(mapStateToProps)(ColorForm)
