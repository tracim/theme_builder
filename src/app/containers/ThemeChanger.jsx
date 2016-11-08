import React from 'react'
import { connect } from 'react-redux'

import Loader from '../components/Loader.jsx'
import ColorForm from './ColorForm.jsx'
import TabHandler from './TabHandler.jsx'

class ThemeChanger extends React.Component {
  render () {
    return (
      <div className='full-height'>
        { this.props.isFetching && <Loader /> }
        <ColorForm />
        <TabHandler />
      </div>
    )
  }
}

const mapStateToProps = ({ isFetching }) => ({ isFetching })

export default connect(mapStateToProps)(ThemeChanger)
