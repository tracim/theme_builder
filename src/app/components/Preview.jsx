import React from 'react'
import { connect } from 'react-redux'

import __ from "../trad.js"

export class Preview extends React.Component {

  render() {
    const { colorList } = this.props

    const propColor = {
      brandPrimary:   colorList.find((item) => item.name === 'brand-primary').hex,
      brandSecondary: colorList.find((item) => item.name === 'brand-secondary').hex,
      brandSuccess:   colorList.find((item) => item.name === 'brand-success').hex,
      brandInfo:      colorList.find((item) => item.name === 'brand-info').hex,
      brandWarning:   colorList.find((item) => item.name === 'brand-warning').hex,
      brandDanger:    colorList.find((item) => item.name === 'brand-danger').hex,
    }

    const style = {
      styleHeader: {
        backgroundColor:  propColor.brandPrimary,
      },
      styleSidebarLeft: {
        backgroundColor:  propColor.brandPrimary,
      },
      styleSidebarRight: {
        backgroundColor:  propColor.brandSecondary
      },
      styleContentHeader: {
        backgroundColor:  propColor.brandSecondary
      },
      styleBtnPrimary: {
        borderColor:      propColor.brandPrimary,
        backgroundColor:  propColor.brandPrimary
      },
      styleBtnSuccess: {
        borderColor:      propColor.brandSuccess,
        backgroundColor:  propColor.brandSuccess
      },
      styleBtnInfo: {
        borderColor:      propColor.brandInfo,
        backgroundColor:  propColor.brandInfo
      },
      styleBtnWarning: {
        borderColor:      propColor.brandWarning,
        backgroundColor:  propColor.brandWarning
      },
      styleBtnDanger: {
        borderColor:      propColor.brandDanger,
        backgroundColor:  propColor.brandDanger
      },
      styleBtnDefault: {},
      styleBtnLink: {},
    }

    return (
      <div className="preview">
        <div className="tracim">
          <div className="tracim__header" style={style.styleHeader}>
            <div className="tracim__header__logo">
              <img src="src/app/image/logo_tracim.png" />
            </div>
            <div className="tracim__header__link">
              <i className="fa fa-home fa-lg"></i>
              { __().previewHome }
            </div>
            <div className="tracim__header__link">
              <i className="fa fa-calendar fa-lg" title=""></i>
              { __().previewCalendar }
            </div>
            <div className="tracim__header__linkright">
              <i className="fa fa-lg fa-user"></i>
              Mr Lapin
            </div>
            <div className="tracim__header__linkrightform">
              <input type="text" placeholder="Rechercher..." />
            </div>
          </div>
          <div className="tracim__sidebar-left" style={style.styleSidebarLeft}>
            <div className="tracim__sidebar-left__btntoggle">
              <i className="fa fa-angle-double-right"></i>
            </div>
            <div className="tracim__sidebar-left__menu">
              <div className="tracim__sidebar-left__menu__title">{ __().previewWorkspaceTitle }</div>
              <div className="tracim__sidebar-left__menu__item open">
                <i className="fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu"></i>
                <i className="fa fa-bank tracim__sidebar-left__menu__item__iconpicto"></i>
                { __().previewWorkspace0 }
              </div>
              <div className="tracim__sidebar-left__menu__item__submenu">
                <i className="fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu"></i>
                <i className="fa fa-folder-open-o tracim__sidebar-left__menu__item__iconpicto"></i>
                { __().previewWorkspace0Sub0 }
              </div>
              <div className="tracim__sidebar-left__menu__item__submenu">
                <i className="fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu"></i>
                <i className="fa fa-folder-open-o tracim__sidebar-left__menu__item__iconpicto"></i>
                { __().previewWorkspace0Sub1 }
              </div>
              <div className="tracim__sidebar-left__menu__item">
                <i className="fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu"></i>
                <i className="fa fa-bank tracim__sidebar-left__menu__item__iconpicto"></i>
                { __().previewWorkspace1 }
              </div>
              <div className="tracim__sidebar-left__menu__item">
                <i className="fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu"></i>
                <i className="fa fa-bank tracim__sidebar-left__menu__item__iconpicto"></i>
                { __().previewWorkspace2 }
              </div>
              <div className="tracim__sidebar-left__menu__item">
                <i className="fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu"></i>
                <i className="fa fa-bank tracim__sidebar-left__menu__item__iconpicto"></i>
                { __().previewWorkspace3 }
              </div>
              <div className="tracim__sidebar-left__menu__item">
                <i className="fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu"></i>
                <i className="fa fa-bank tracim__sidebar-left__menu__item__iconpicto"></i>
                { __().previewWorkspace4 }
              </div>
            </div>
          </div>
          <div className="tracim__content">
            <div className="tracim__content__header" style={style.styleContentHeader}>
              <div className="tracim__content__header__title">
                <i className="fa fa-fw fa-lg fa-home"></i>
                { __().previewContentTitle }
              </div>
              <div className="tracim__content__header__subtitle">{ __().previewContentSubTitle }, Mr Lapin</div>
            </div>
            <div className="tracim__content__bootstrap">
              <div className="tracim__content__boostrap__item">
                <div className="tracim__content__bootstrap__item__title">Buttons</div>
                <button type="button" className="btn btn-primary" style={style.styleBtnPrimary}>Primary</button>
                <button type="button" className="btn btn-success" style={style.styleBtnSuccess}>Success</button>
                <button type="button" className="btn btn-info"    style={style.styleBtnInfo}>Info</button>
                <button type="button" className="btn btn-warning" style={style.styleBtnWarning}>Warning</button>
                <button type="button" className="btn btn-danger"  style={style.styleBtnDanger}>Danger</button>
                <button type="button" className="btn btn-default" style={style.styleBtnDefault}>Default</button>
                <button type="button" className="btn btn-link"    style={style.styleBtnLink}>Link</button>
              </div>
              {/*
              <div className="tracim__content__boostrap__item">
                <div className="tracim__content__bootstrap__item__title">Contextual backgrounds</div>
                <p className="bg-primary" style={style.styleBgPrimary}>primary</p>
                <p className="bg-success" style={style.styleBgSuccess}>success</p>
                <p className="bg-info"    style={style.styleBgInfo}>info</p>
                <p className="bg-warning" style={style.styleBgWarning}>warning</p>
                <p className="bg-danger"  style={style.styleBgDanger}>danger</p>
              </div>
              */}
            </div>
          </div>
          <div className="tracim__sidebar-right" style={style.styleSidebarRight}>
            <div className="tracim__sidebar-right__btngroup">
              <button type="button" className="tracim__sidebar-right__btngroup__btn">
                <i className="fa fa-edit"></i>
                { __().previewSidebarRightBtn0 }
              </button>
              <button type="button" className="tracim__sidebar-right__btngroup__btn">
                <i className="fa fa-key"></i>
                { __().previewSidebarRightBtn1 }
              </button>
            </div>
            <div className="tracim__sidebar-right__title">
              <i className="fa fa-flash"></i>
              { __().previewSidebarRightSeparator }
            </div>
            <div className="tracim__sidebar-right__btngroup">
              <button type="button" className="tracim__sidebar-right__btngroup__btn">
                <i className="fa fa-eye-slash"></i>
                { __().previewSidebarRightBtn2 }
              </button>
              <button type="button" className="tracim__sidebar-right__btngroup__btn">
                <i className="fa fa-line-chart"></i>
                { __().previewSidebarRightBtn3 }
              </button>
              <button type="button" className="tracim__sidebar-right__btngroup__btn">
                <i className="fa fa-bank"></i>
                { __().previewSidebarRightBtn4 }
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


function mapStateToProps({ lang, color }) {
  return { lang: lang, colorList: color }
}

export default connect(mapStateToProps)(Preview)
