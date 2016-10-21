import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Preview from "./Preview.jsx"
import TracimInstance from "./TracimInstance.jsx"

import { switchTab } from "../action-creators.js"

import __ from "../trad.js"

export class TabHandler extends React.Component {

  render() {

    const { activeTab, dispatch } = this.props

    const tabTitleClass0 = classnames('tabhandler__title', activeTab === 0 ? 'active' : null)
    const tabTitleClass1 = classnames('tabhandler__title', activeTab === 1 ? 'active' : null)

    const tabContentClass0 = {display: activeTab !== 0 ? 'none' : 'block'}
    const tabContentClass1 = {display: activeTab !== 1 ? 'none' : 'block'}

    return (
      <div className="tabhandler">

        <div className={tabTitleClass0} onClick={() => dispatch(switchTab(0))}>
          { __().tabTitle0 }
        </div>
        <div className={tabTitleClass1} onClick={() => dispatch(switchTab(1))}>
          { __().tabTitle1 }
        </div>

        <div className="tabhandler__content" style={tabContentClass0}>
          <Preview />
        </div>

        <div className="tabhandler__content" style={tabContentClass1}>
          <TracimInstance />
        </div>

      </div>
    )
  }
}

// const mapStateToProps({ lang, activeTab}) => ({lang, activeTab})
function mapStateToProps(state) {
  return { lang: state.lang, activeTab: state.activeTab }
}

export default connect(mapStateToProps)(TabHandler)
