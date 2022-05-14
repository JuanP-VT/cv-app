import React, { Component } from 'react'
import appState from '../interface'
import ExperienceTemplate from './ExperienceTemplate'

interface Props {
  appState: appState
}

class CvTemplateExperiences extends Component<Props> {
  render() {
    return (
      <div>
        <div className='highlight'>Experiences</div>
        <ExperienceTemplate
          appState={this.props.appState}
          position={this.props.appState.xp1Position}
          company={this.props.appState.xp1Company}
          city={this.props.appState.xp1City}
          from={this.props.appState.xp1From}
          to={this.props.appState.xp1To}
        />
      </div>
    )
  }
}

export default CvTemplateExperiences
