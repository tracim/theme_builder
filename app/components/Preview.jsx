import React from 'react'
import logoTracim from '../image/logo_tracim.png'
import { StyleSheet, css } from 'aphrodite/no-important'

import __ from '../trad.js'

export function Preview (props) {
  const { propColor } = props

  const style = StyleSheet.create({
    styleHeader: {
      backgroundColor: propColor.brandPrimary
    },
    styleSidebarLeft: {
      backgroundColor: propColor.brandPrimary
    },
    styleSidebarRight: {
      backgroundColor: propColor.brandSecondary
    },
    styleContentHeader: {
      backgroundColor: propColor.brandSecondary
    },
    styleBtnPrimary: {
      borderColor: propColor.brandPrimary,
      backgroundColor: propColor.brandPrimary
    },
    styleBtnSuccess: {
      borderColor: propColor.brandSuccess,
      backgroundColor: propColor.brandSuccess
    },
    styleBtnInfo: {
      borderColor: propColor.brandInfo,
      backgroundColor: propColor.brandInfo
    },
    styleBtnWarning: {
      borderColor: propColor.brandWarning,
      backgroundColor: propColor.brandWarning
    },
    styleBtnDanger: {
      borderColor: propColor.brandDanger,
      backgroundColor: propColor.brandDanger
    },
    styleBtnDefault: {},
    styleBtnLink: {},
    styleMenuColor: {
      color: propColor.menuColor
    },
    styleMenuColorHover: {
      ':hover': {
        color: propColor.menuColorHover,
        backgroundColor: propColor.menuColorBgHover
      }
    },
    styleMenuSelectedColor: {
      color: propColor.menuClickedColor,
      backgroundColor: propColor.menuClickedColorBg
    }
  })

  return (
    <div className='preview'>
      <div className='tracim'>
        <div className={'tracim__header ' + css(style.styleHeader)} >
          <div className='tracim__header__logo'>
            <img src={logoTracim} />
          </div>
          <div className={'tracim__header__link ' + css(style.styleMenuColor)}>
            <i className='fa fa-home fa-lg' />
            { __('previewHome') }
          </div>
          <div className={'tracim__header__link ' + css(style.styleMenuColor)}>
            <i className='fa fa-calendar' />
            { __('previewCalendar') }
          </div>
          <div className={'tracim__header__linkright ' + css(style.styleMenuColor)}>
            <i className='fa fa-lg fa-user' />
            Mr Doe
          </div>
          <div className='tracim__header__linkrightform'>
            <input type='text' placeholder={__('previewSearchInput')} />
          </div>
          <div className={'tracim__header__linkright ' + css(style.styleMenuColor)}>
            <i className='fa fa-lg fa-eye' />
            {__('previewReadmode')}
          </div>
        </div>
        <div className={'tracim__sidebar-left ' + css(style.styleSidebarLeft)}>
          <div className='tracim__sidebar-left__btntoggle'>
            <i className='fa fa-angle-double-right' />
          </div>
          <div className='tracim__sidebar-left__menu'>
            <div className={'tracim__sidebar-left__menu__title ' + css(style.styleMenuColor)}>{ __('previewWorkspaceTitle') }</div>
            <div className={'tracim__sidebar-left__menu__item open ' + css(style.styleMenuColor, style.styleMenuColorHover)}>
              <i className='fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu' />
              <i className='fa fa-bank tracim__sidebar-left__menu__item__iconpicto' />
              { __('previewWorkspace0') }
            </div>
            <div className={'tracim__sidebar-left__menu__item__submenu ' + css(style.styleMenuColor, style.styleMenuColorHover)}>
              <i className='fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu' />
              <i className='fa fa-folder-open-o tracim__sidebar-left__menu__item__iconpicto' />
              { __('previewWorkspace0Sub0') }
            </div>
            <div className={'tracim__sidebar-left__menu__item__submenu ' + css(style.styleMenuColor, style.styleMenuColorHover)}>
              <i className='fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu' />
              <i className='fa fa-folder-open-o tracim__sidebar-left__menu__item__iconpicto' />
              { __('previewWorkspace0Sub1') }
            </div>
            <div className={'tracim__sidebar-left__menu__item ' + css(style.styleMenuColor, style.styleMenuColorHover)}>
              <i className='fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu' />
              <i className='fa fa-bank tracim__sidebar-left__menu__item__iconpicto' />
              { __('previewWorkspace1') }
            </div>
            <div className={'tracim__sidebar-left__menu__item ' + css(style.styleMenuSelectedColor)}>
              <i className='fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu' />
              <i className='fa fa-bank tracim__sidebar-left__menu__item__iconpicto' />
              { __('previewWorkspace2') }
            </div>
            <div className={'tracim__sidebar-left__menu__item ' + css(style.styleMenuColor, style.styleMenuColorHover)}>
              <i className='fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu' />
              <i className='fa fa-bank tracim__sidebar-left__menu__item__iconpicto' />
              { __('previewWorkspace3') }
            </div>
            <div className={'tracim__sidebar-left__menu__item ' + css(style.styleMenuColor, style.styleMenuColorHover)}>
              <i className='fa fa-sort-desc tracim__sidebar-left__menu__item__iconmenu' />
              <i className='fa fa-bank tracim__sidebar-left__menu__item__iconpicto' />
              { __('previewWorkspace4') }
            </div>
          </div>
        </div>
        <div className='tracim__content'>
          <div className={'tracim__content__header ' + css(style.styleContentHeader)}>
            <div className='tracim__content__header__title'>
              <i className='fa fa-fw fa-lg fa-home' />
              { __('previewContentTitle') }
            </div>
            <div className='tracim__content__header__subtitle'>{ __('previewContentSubTitle') }, Mr Doe</div>
          </div>
          {/*
          <div className='tracim__content__bootstrap'>
            <div className='tracim__content__boostrap__item'>
              <div className='tracim__content__bootstrap__item__title'>Buttons</div>
              <button type='button' className={'btn btn-primary ' + css(style.styleBtnPrimary)}>Primary</button>
              <button type='button' className={'btn btn-success ' + css(style.styleBtnSuccess)}>Success</button>
              <button type='button' className={'btn btn-info ' + css(style.styleBtnInfo)}>Info</button>
              <button type='button' className={'btn btn-warning ' + css(style.styleBtnWarning)}>Warning</button>
              <button type='button' className={'btn btn-danger ' + css(style.styleBtnDanger)}>Danger</button>
              <button type='button' className={'btn btn-default ' + css(style.styleBtnDefault)}>Default</button>
              <button type='button' className={'btn btn-link ' + css(style.styleBtnLink)}>Link</button>
            </div>
            <div className='tracim__content__boostrap__item'>
              <div className='tracim__content__bootstrap__item__title'>Contextual backgrounds</div>
              <p className={'bg-primary ' + css(style.styleBgPrimary)}>primary</p>
              <p className={'bg-success ' + css(style.styleBgSuccess)}>success</p>
              <p className={'bg-info ' + css(style.styleBgInfo)}>info</p>
              <p className={'bg-warning ' + css(style.styleBgWarning)}>warning</p>
              <p className={'bg-danger ' + css(style.styleBgDanger)}>danger</p>
            </div>
          </div>
          */}
          <div className='tracim__content__dashboard'>
            <div className='tracim__content__dashboard__title recent_activities active'>
              <i className='fa fa-line-chart' />
              { __('previewRecentActivitiesTitle') }
              <span className='tracim__content__dashboard__title-lastactivity'>[2 heures]</span>
            </div>
            <div className='tracim__content__dashboard__title unread'>
              <div className='tracim__content__dashboard__title-news fa-stack'>
                <i className='fa fa-bookmark fa-stack-1x' />
                <i className='tracim__content__dashboard__title-news__number fa-stack-1x'>10+</i>
              </div>
              <i className='fa fa-eye-slash' />
              { __('previewUnreadTitle') }
            </div>
            <div className='tracim__content__dashboard__title workspaces'>
              <i className='fa fa-bank' />
              { __('previewWorkspacesTitle') }
            </div>
            <div className='tracim__content__dashboard__content'>
              <div className='tracim__content__dashboard__content__item'>
                <div className='tracim__content__dashboard__content__item-left'>
                  <div className='tracim__content__dashboard__content__item-left__top'>
                    <i className='fa fa-comments-o talk' />
                    { __('previewUnread0Name') }
                  </div>
                  <div className='tracim__content__dashboard__content__item-left__bottom'>
                    { __('previewWorkspace0') }
                  </div>
                </div>
                <div className='tracim__content__dashboard__content__item-right'>
                  2 { __('hours') }
                </div>
              </div>
              <div className='tracim__content__dashboard__content__item'>
                <div className='tracim__content__dashboard__content__item-left'>
                  <div className='tracim__content__dashboard__content__item-left__top'>
                    <i className='fa fa-file-text-o post' />
                    { __('previewUnread1Name') }
                  </div>
                  <div className='tracim__content__dashboard__content__item-left__bottom'>
                    { __('previewWorkspace1') }
                  </div>
                </div>
                <div className='tracim__content__dashboard__content__item-right'>
                  14 { __('hours') }
                </div>
              </div>
              <div className='tracim__content__dashboard__content__item'>
                <div className='tracim__content__dashboard__content__item-left'>
                  <div className='tracim__content__dashboard__content__item-left__top'>
                    <i className='fa fa-paperclip file' />
                    { __('previewUnread2Name') }
                  </div>
                  <div className='tracim__content__dashboard__content__item-left__bottom'>
                    { __('previewWorkspace3') }
                  </div>
                </div>
                <div className='tracim__content__dashboard__content__item-right'>
                  2 { __('days') }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'tracim__sidebar-right ' + css(style.styleSidebarRight)}>
          <div className='tracim__sidebar-right__btngroup'>
            <button type='button' className='tracim__sidebar-right__btngroup__btn'>
              <i className='fa fa-edit' />
              { __('previewSidebarRightBtn0') }
            </button>
            <button type='button' className='tracim__sidebar-right__btngroup__btn'>
              <i className='fa fa-key' />
              { __('previewSidebarRightBtn1') }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Preview.propTypes = {
  propColor: React.PropTypes.object.isRequired
}

export default Preview
