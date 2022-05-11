import React, { Component } from 'react'
import appState from '../interface'
import Skill from './Skill'

interface Props {
  appState: appState
}

class CvTemplateSkills extends Component<Props> {
  render() {
    const hasSkill1 = this.props.appState.hasSkill1
    const hasSkill2 = this.props.appState.hasSkill2
    const hasSkill3 = this.props.appState.hasSkill3
    return (
      <div id='templateSkills'>
        <span className='highlight'>Skills</span>
        <div id='skillContainer'>
          {hasSkill1 && (
            <Skill skill={this.props.appState.skill1} skillSrc={this.props.appState.skill1Src} />
          )}
          {hasSkill2 && (
            <Skill skill={this.props.appState.skill2} skillSrc={this.props.appState.skill2Src} />
          )}
          {hasSkill3 && (
            <Skill skill={this.props.appState.skill3} skillSrc={this.props.appState.skill3Src} />
          )}
        </div>
      </div>
    )
  }
}

export default CvTemplateSkills
