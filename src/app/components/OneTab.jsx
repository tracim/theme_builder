import React from 'react'

// this component isn't really usefull but it show the use of props.children
export function OneTab (props) {
  const styleTabContent = {
    display: props.active ? 'block' : 'none'
  }
  // use of the syntaxe bellow because we must not set height value if props.isSaasInstance === false
  // to not override it's calculated one in stylus file
  props.isSaasInstance && (styleTabContent.height = '100%')

  return (
    <div className='tabhandler__content' style={styleTabContent}>
      { props.children }
    </div>
  )
}

OneTab.propTypes = {
  active: React.PropTypes.bool.isRequired,
  isSaasInstance: React.PropTypes.bool
}

export default OneTab
