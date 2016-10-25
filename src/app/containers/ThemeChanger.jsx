import React from 'react'

import ColorForm from './ColorForm.jsx'
import TabHandler from './TabHandler.jsx'

class ThemeChanger extends React.Component {
  render () {
    return (
      <div>
        <ColorForm />
        <TabHandler />
      </div>
    )
  }
}

export default ThemeChanger
