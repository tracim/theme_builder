import React from 'react'

// this component isn't really usefull but it show the use of props.children
export function OneTab (props) {
  return (
    <div className='tabhandler__content' style={{display: props.active ? 'block' : 'none'}}>
      { props.children }
    </div>
  )
}

OneTab.propTypes = {
  active: React.PropTypes.bool
}

export default OneTab
