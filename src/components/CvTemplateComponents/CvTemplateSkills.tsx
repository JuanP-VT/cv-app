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
          {hasSkill1 && <Skill appState={this.props.appState} />}
          {hasSkill2 && <Skill appState={this.props.appState} />}
          {hasSkill3 && <Skill appState={this.props.appState} />}
        </div>
      </div>
    )
  }
}

export default CvTemplateSkills
