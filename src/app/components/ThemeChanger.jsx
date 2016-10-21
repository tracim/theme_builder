import React from "react"
import { connect } from "react-redux"

import ColorForm from "./ColorForm.jsx"
import TabHandler from "./TabHandler.jsx"

import { changeColor, resetColor } from "../action-creators.js"

export class ThemeChanger extends React.Component {

  render() {
    const { dispatch } = this.props
    return (
      <div>
        <ColorForm />
        <TabHandler />
      </div>
    )
  }
}

//const mapStateToProps = (store) => ({color: store.color})
//const mapStateToProps = ({color}) => ({color})
function mapStateToProps(state) {
  return { color: state.color }
}

// const mapDispatchToProps = (dispatch) => {
//    onChangeColor: (colorName, colorHex) => dispatch(changeColor(colorName, colorHex))
// }
export default connect(mapStateToProps)(ThemeChanger)
