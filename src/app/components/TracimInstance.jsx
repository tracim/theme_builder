import React from 'react'

export function TracimInstance (props) {
  return (
    <div>
      <iframe className='traciminstance' src={props.urlTracimInstance} />
    </div>
  )
}

TracimInstance.propTypes = {
  urlTracimInstance: React.PropTypes.string.isRequired
}

export default TracimInstance
