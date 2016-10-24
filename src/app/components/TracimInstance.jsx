import React from "react"

export function TracimInstance (props) {
  return (
    <div>
      <iframe className="traciminstance" src={props.urlTracimInstance}></iframe>
    </div>
  )
}

TracimInstance.propTypes = {
  urlTracimInstance: React.PropTypes.string
}

export default TracimInstance
