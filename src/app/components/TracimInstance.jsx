import React from 'react'

export function TracimInstance (props) {
  return (
    <iframe className='traciminstance' src={props.urlTracimInstance} />
  )
}

TracimInstance.propTypes = {
  urlTracimInstance: React.PropTypes.string.isRequired
}

export default TracimInstance
