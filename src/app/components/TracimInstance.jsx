import React from "react"
import { connect } from "react-redux"

import { updateTracimInstance } from "../action-creators.js"

export class TracimInstance extends React.Component {
  render() {
    return (
      <iframe className="traciminstance" src={this.props.urlTracimInstance}></iframe>
    )
  }
}

const mapStateToProps = ({urlTracimInstance}) => ({urlTracimInstance})

export default connect(mapStateToProps)(TracimInstance)
