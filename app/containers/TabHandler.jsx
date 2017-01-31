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
    const { activeTab, urlTracimInstance, customizablesList, isSaasInstance, dispatch } = this.props

    const mapTopLvlCustomizableData = []
    customizablesList.forEach(category => category.fields.forEach(field => mapTopLvlCustomizableData.push(field)))

    console.log(mapTopLvlCustomizableData)

    const mapColorForPreview = {
      brandPrimary: mapTopLvlCustomizableData.find((item) => item.name === 'brand-primary').hex,
      brandSecondary: mapTopLvlCustomizableData.find((item) => item.name === 'brand-secondary').hex,
      // brandSuccess: mapTopLvlCustomizableData.find((item) => item.name === 'brand-success').hex,
      // brandInfo: mapTopLvlCustomizableData.find((item) => item.name === 'brand-info').hex,
      // brandWarning: mapTopLvlCustomizableData.find((item) => item.name === 'brand-warning').hex,
      // brandDanger: mapTopLvlCustomizableData.find((item) => item.name === 'brand-danger').hex,
      menuColor: mapTopLvlCustomizableData.find((item) => item.name === 'text-menu').hex,
      menuColorHover: mapTopLvlCustomizableData.find((item) => item.name === 'text-menu:hover').hex,
      menuColorBgHover: mapTopLvlCustomizableData.find((item) => item.name === 'text-menu-bg:hover').hex,
      menuClickedColor: mapTopLvlCustomizableData.find((item) => item.name === 'text-menu-clicked').hex,
      menuClickedColorBg: mapTopLvlCustomizableData.find((item) => item.name === 'text-menu-bg-clicked').hex
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

const mapStateToProps = ({ lang, activeTab, config: { urlTracimInstance, isSaasInstance }, customizables }) => ({
  lang, activeTab, urlTracimInstance, isSaasInstance, customizablesList: customizables
})

export default connect(mapStateToProps)(TabHandler)
