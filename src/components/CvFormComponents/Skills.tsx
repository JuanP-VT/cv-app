import React, { Component } from 'react'
import appState from '../interface'
import FormSkill from './FormSkill'

interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
  appState: appState
}
class Skills extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const hasSkill1 = this.props.appState.hasSkill1
    const hasSkill2 = this.props.appState.hasSkill2
    const hasSkill3 = this.props.appState.hasSkill3
    return (
      <div id='templateSkills'>
        {hasSkill1 && <FormSkill appState={this.props.appState} refNum='1' refInState='skill1' />}
        {hasSkill2 && <FormSkill appState={this.props.appState} refNum='1' refInState='skill1' />}
        {hasSkill3 && <FormSkill appState={this.props.appState} refNum='1' refInState='skill1' />}

        <button id='addSkill'>Add Skill</button>
      </div>
    )
  }
}

export default Skills
