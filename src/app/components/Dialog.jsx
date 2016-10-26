import React from 'react'
import __ from '../trad.js'

export function Dialog (props) {
  return (
    <div className='modal' role='dialog' style={{display: props.display ? 'block' : 'none'}}>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={props.onCancel}>
              <span aria-hidden='true'>&times;</span>
            </button>
            <h4 className='modal-title'>{props.msg}</h4>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-default' data-dismiss='modal' onClick={props.onCancel}>
              {__().dialogBtnCancel}
            </button>
            <button type='button' className='dialog__btn__validate btn btn-primary' onClick={props.onValidate}>
              {__().dialogBtnValidate}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Dialog.propTypes = {
  display: React.PropTypes.bool.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onValidate: React.PropTypes.func.isRequired
}

export default Dialog
