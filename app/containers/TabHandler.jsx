import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Preview from '../components/Preview.jsx'
import OneTab from '../components/OneTab.jsx'
import TracimInstance from '../components/TracimInstance.jsx'

import { switchTab } from '../action-creators.js'
import __ from '../trad.js'

export class TabHandler extends React.Component {

  render () {
    const { activeTab, urlTracimInstance, colorList, isSaasInstance, dispatch } = this.props

    const mapColorForPreview = {
      brandPrimary: colorList.find((item) => item.name === 'brand-primary').hex,
      brandSecondary: colorList.find((item) => item.name === 'brand-secondary').hex,
      brandSuccess: colorList.find((item) => item.name === 'brand-success').hex,
      brandInfo: colorList.find((item) => item.name === 'brand-info').hex,
      brandWarning: colorList.find((item) => item.name === 'brand-warning').hex,
      brandDanger: colorList.find((item) => item.name === 'brand-danger').hex,
      menuColor: colorList.find((item) => item.name === 'text-menu').hex,
      menuColorHover: colorList.find((item) => item.name === 'text-menu:hover').hex,
      menuColorBgHover: colorList.find((item) => item.name === 'text-menu-bg:hover').hex,
      menuClickedColor: colorList.find((item) => item.name === 'text-menu-clicked').hex,
      menuClickedColorBg: colorList.find((item) => item.name === 'text-menu-bg-clicked').hex
    }

    return (
      <div className='tabhandler'>
        { isSaasInstance ? (
          <div className='full-height'>
            <div className={classnames('tabhandler__title', activeTab === 0 && 'active')} onClick={() => dispatch(switchTab(0))}>
              { __('tabTitle0') }
            </div>
            <div className={classnames('tabhandler__title', activeTab === 1 && 'active')} onClick={() => dispatch(switchTab(1))}>
              { __('tabTitle1') }
            </div>
            <OneTab active={activeTab === 0}>
              <Preview propColor={mapColorForPreview} />
            </OneTab>
            <OneTab active={activeTab === 1}>
              <TracimInstance urlTracimInstance={urlTracimInstance} />
            </OneTab>
          </div>
        ) : (
          <OneTab active isSaasInstance>
            <Preview propColor={mapColorForPreview} />
          </OneTab>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ lang, activeTab, config: { urlTracimInstance, isSaasInstance }, color }) => ({
  lang, activeTab, urlTracimInstance, isSaasInstance, colorList: color
})

export default connect(mapStateToProps)(TabHandler)
