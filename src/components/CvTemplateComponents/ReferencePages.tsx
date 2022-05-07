import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
}

class ReferencePages extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {}

  render() {
    return <div></div>
  }
}

export default ReferencePages
