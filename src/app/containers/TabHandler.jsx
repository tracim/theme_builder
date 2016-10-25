import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Preview from '../components/Preview.jsx'
import TracimInstance from '../components/TracimInstance.jsx'
import OneTab from '../components/OneTab.jsx'

import { switchTab } from '../action-creators.js'

import __ from '../trad.js'

export class TabHandler extends React.Component {

  render () {
    const { activeTab, urlTracimInstance, colorList, dispatch } = this.props

    const mapColorForPreview = {
      brandPrimary: colorList.find((item) => item.name === 'brand-primary').hex,
      brandSecondary: colorList.find((item) => item.name === 'brand-secondary').hex,
      brandSuccess: colorList.find((item) => item.name === 'brand-success').hex,
      brandInfo: colorList.find((item) => item.name === 'brand-info').hex,
      brandWarning: colorList.find((item) => item.name === 'brand-warning').hex,
      brandDanger: colorList.find((item) => item.name === 'brand-danger').hex
    }

    return (
      <div className='tabhandler'>

        <div className={classnames('tabhandler__title', activeTab === 0 && 'active')} onClick={() => dispatch(switchTab(0))}>
          { __().tabTitle0 }
        </div>
        <div className={classnames('tabhandler__title', activeTab === 1 && 'active')} onClick={() => dispatch(switchTab(1))}>
          { __().tabTitle1 }
        </div>

        <OneTab active={activeTab === 0}>
          <Preview propColor={mapColorForPreview} />
        </OneTab>
        <OneTab active={activeTab === 1}>
          <TracimInstance urlTracimInstance={urlTracimInstance} />
        </OneTab>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    lang: state.lang,
    activeTab: state.activeTab,
    urlTracimInstance: state.urlTracimInstance,
    colorList: state.color
  }
}

export default connect(mapStateToProps)(TabHandler)
