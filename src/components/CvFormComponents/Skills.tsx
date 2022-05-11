import React, { Component } from 'react'
import appState from '../interface'
import FormSkill from './FormSkill'

interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
  handleAddSkill: () => void
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
    const hasSkill4 = this.props.appState.hasSkill4
    const hasSkill5 = this.props.appState.hasSkill5
    const hasSkill6 = this.props.appState.hasSkill6
    const hasSkill7 = this.props.appState.hasSkill7
    const hasSkill8 = this.props.appState.hasSkill8
    const hasSkill9 = this.props.appState.hasSkill9
    return (
      <div id='templateSkills'>
        {hasSkill1 && (
          <FormSkill
            appState={this.props.appState}
            refNum='1'
            refInState='skill1'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill2 && (
          <FormSkill
            appState={this.props.appState}
            refNum='2'
            refInState='skill2'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill3 && (
          <FormSkill
            appState={this.props.appState}
            refNum='3'
            refInState='skill3'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill4 && (
          <FormSkill
            appState={this.props.appState}
            refNum='4'
            refInState='skill4'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill5 && (
          <FormSkill
            appState={this.props.appState}
            refNum='5'
            refInState='skill5'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill6 && (
          <FormSkill
            appState={this.props.appState}
            refNum='6'
            refInState='skill6'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill7 && (
          <FormSkill
            appState={this.props.appState}
            refNum='7'
            refInState='skill7'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill8 && (
          <FormSkill
            appState={this.props.appState}
            refNum='8'
            refInState='skill8'
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasSkill9 && (
          <FormSkill
            appState={this.props.appState}
            refNum='9'
            refInState='skill9'
            saveInAppState={this.props.saveInAppState}
          />
        )}

        <button id='addSkill' onClick={this.props.handleAddSkill}>
          Add Skill
        </button>
      </div>
    )
  }
}

export default Skills
