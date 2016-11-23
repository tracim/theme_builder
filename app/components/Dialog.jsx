import React from 'react'
import __ from '../trad.js'

export function Dialog (props) {
  return (
    <div className='modal' role='dialog' style={{display: props.display ? 'block' : 'none'}}>
      <div className='modal-dialog modal-sm' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={props.onCancel}>
              <span aria-hidden='true'>&times;</span>
            </button>
            <h4 className='modal-title'>{props.msg}</h4>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-default' data-dismiss='modal' onClick={props.onCancel}>
              {__('dialogBtnCancel')}
            </button>
            <button type='button' className='dialog__btn__validate btn btn-primary' onClick={props.onValidate}>
              {__('dialogBtnValidate')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Dialog.propTypes = {
  msg: React.PropTypes.string,
  display: React.PropTypes.bool.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onValidate: React.PropTypes.func.isRequired
}

export function DialogHelp (props) {
  return (
    <div className='modal' role='dialog' style={{display: props.display ? 'block' : 'none'}}>
      <div className='modal-dialog modal-lg' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={props.onValidate}>
              <span aria-hidden='true'>&times;</span>
            </button>
            <h4 className='modal-title'>{__('dialogHelp')}</h4>
          </div>
          <div className='modal-body'>
            img goes here
          </div>
          <div className='modal-footer'>
            <button type='button' className='dialog__btn__validate btn btn-primary' onClick={props.onValidate}>
              {__('dialogBtnValidate')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

DialogHelp.propTypes = {
  msg: React.PropTypes.string,
  display: React.PropTypes.bool.isRequired,
  onValidate: React.PropTypes.func.isRequired
}
