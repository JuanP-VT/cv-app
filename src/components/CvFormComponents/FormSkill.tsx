import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
  refNum: string
  refInState: string
}

class FormSkill extends Component<Props> {
  state = {}

  render() {
    return (
      <>
        Skill {this.props.refNum}
        <input id={this.props.refInState} />
      </>
    )
  }
}

export default FormSkill
