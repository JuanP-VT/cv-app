import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
  refNum: string
  refInState: string
  saveInAppState: (objProp: string, id: string) => void
}

class FormSkill extends Component<Props> {
  state = {}

  render() {
    const Iid = this.props.refInState
    return (
      <>
        Skill {this.props.refNum}
        <input id={this.props.refInState} onChange={() => this.props.saveInAppState(Iid, Iid)} />
      </>
    )
  }
}

export default FormSkill
