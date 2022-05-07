import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
}

class PersonalDetails extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {}

  render() {
    return <div id='personalDetails'></div>
  }
}

export default PersonalDetails
