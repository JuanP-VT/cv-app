import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
}

class Pages extends Component<Props> {
  render() {
    return <div id='formPages'>Pages</div>
  }
}

export default Pages
