import React from "react"

export class TracimInstance extends React.Component {
  render() {
    return (
      <div>
        <iframe className="traciminstance" src={this.props.urlTracimInstance}></iframe>
      </div>
    )
  }
}

TracimInstance.propTypes = {
  urlTracimInstance: React.PropTypes.string
}

export default TracimInstance
