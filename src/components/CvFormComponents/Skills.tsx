import React, { Component } from 'react'
import appState from '../interface'
import FormSkill from './FormSkill'

interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
  handleAddSkill: () => void
  handleIconFiles: (objProp: string, id: string) => void
  appState: appState
}
class Skills extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    // This checks how many Skills components are currently needed
    const hasSkill1 = this.props.appState.hasSkill1
    const hasSkill2 = this.props.appState.hasSkill2
    const hasSkill3 = this.props.appState.hasSkill3
    const hasSkill4 = this.props.appState.hasSkill4
    const hasSkill5 = this.props.appState.hasSkill5
    const hasSkill6 = this.props.appState.hasSkill6
    const hasSkill7 = this.props.appState.hasSkill7
    const hasSkill8 = this.props.appState.hasSkill8
    const hasSkill9 = this.props.appState.hasSkill9
    // Getting the values of each skill
    const skill1Val = this.props.appState.skill1
    const skill2Val = this.props.appState.skill2
    const skill3Val = this.props.appState.skill3
    const skill4Val = this.props.appState.skill4
    const skill5Val = this.props.appState.skill5
    const skill6Val = this.props.appState.skill6
    const skill7Val = this.props.appState.skill7
    const skill8Val = this.props.appState.skill8
    const skill9Val = this.props.appState.skill9

    return (
      <div id='templateSkills'>
        {hasSkill1 && (
          <FormSkill
            appState={this.props.appState}
            refNum='1'
            refInState='skill1'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill1Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill1Val}
          />
        )}
        {hasSkill2 && (
          <FormSkill
            appState={this.props.appState}
            refNum='2'
            refInState='skill2'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill2Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill2Val}
          />
        )}
        {hasSkill3 && (
          <FormSkill
            appState={this.props.appState}
            refNum='3'
            refInState='skill3'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill3Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill3Val}
          />
        )}
        {hasSkill4 && (
          <FormSkill
            appState={this.props.appState}
            refNum='4'
            refInState='skill4'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill4Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill4Val}
          />
        )}
        {hasSkill5 && (
          <FormSkill
            appState={this.props.appState}
            refNum='5'
            refInState='skill5'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill5Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill5Val}
          />
        )}
        {hasSkill6 && (
          <FormSkill
            appState={this.props.appState}
            refNum='6'
            refInState='skill6'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill6Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill6Val}
          />
        )}
        {hasSkill7 && (
          <FormSkill
            appState={this.props.appState}
            refNum='7'
            refInState='skill7'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill7Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill7Val}
          />
        )}
        {hasSkill8 && (
          <FormSkill
            appState={this.props.appState}
            refNum='8'
            refInState='skill8'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill8Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill8Val}
          />
        )}
        {hasSkill9 && (
          <FormSkill
            appState={this.props.appState}
            refNum='9'
            refInState='skill9'
            saveInAppState={this.props.saveInAppState}
            srcRef='skill9Src'
            handleIconFiles={this.props.handleIconFiles}
            skillValue={skill9Val}
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
