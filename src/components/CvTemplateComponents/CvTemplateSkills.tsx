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
    const hasSkill4 = this.props.appState.hasSkill4
    const hasSkill5 = this.props.appState.hasSkill5
    const hasSkill6 = this.props.appState.hasSkill6
    const hasSkill7 = this.props.appState.hasSkill7
    const hasSkill8 = this.props.appState.hasSkill8
    const hasSkill9 = this.props.appState.hasSkill9
    return (
      <div id='templateSkills'>
        <span className='highlight accent'>Skills</span>
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
          {hasSkill4 && (
            <Skill skill={this.props.appState.skill4} skillSrc={this.props.appState.skill4Src} />
          )}
          {hasSkill5 && (
            <Skill skill={this.props.appState.skill5} skillSrc={this.props.appState.skill5Src} />
          )}
          {hasSkill6 && (
            <Skill skill={this.props.appState.skill6} skillSrc={this.props.appState.skill6Src} />
          )}
          {hasSkill7 && (
            <Skill skill={this.props.appState.skill7} skillSrc={this.props.appState.skill7Src} />
          )}
          {hasSkill8 && (
            <Skill skill={this.props.appState.skill8} skillSrc={this.props.appState.skill8Src} />
          )}
          {hasSkill9 && (
            <Skill skill={this.props.appState.skill9} skillSrc={this.props.appState.skill9Src} />
          )}
        </div>
      </div>
    )
  }
}

export default CvTemplateSkills
