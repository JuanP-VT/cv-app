import React, { Component } from 'react'
import appState from '../interface'
import ExperienceTemplate from './ExperienceTemplate'

interface Props {
  appState: appState
}

class CvTemplateExperiences extends Component<Props> {
  render() {
    const hasExperience1 = this.props.appState.hasExperience1
    const hasExperience2 = this.props.appState.hasExperience2
    const hasExperience3 = this.props.appState.hasExperience3
    const hasExperience4 = this.props.appState.hasExperience4
    return (
      <div>
        <div className='highlight'>Experiences</div>
        {hasExperience1 && (
          <ExperienceTemplate
            appState={this.props.appState}
            position={this.props.appState.xp1Position}
            company={this.props.appState.xp1Company}
            city={this.props.appState.xp1City}
            from={this.props.appState.xp1From}
            to={this.props.appState.xp1To}
          />
        )}
        {hasExperience2 && (
          <ExperienceTemplate
            appState={this.props.appState}
            position={this.props.appState.xp2Position}
            company={this.props.appState.xp2Company}
            city={this.props.appState.xp2City}
            from={this.props.appState.xp2From}
            to={this.props.appState.xp2To}
          />
        )}
        {hasExperience3 && (
          <ExperienceTemplate
            appState={this.props.appState}
            position={this.props.appState.xp3Position}
            company={this.props.appState.xp3Company}
            city={this.props.appState.xp3City}
            from={this.props.appState.xp3From}
            to={this.props.appState.xp3To}
          />
        )}
        {hasExperience4 && (
          <ExperienceTemplate
            appState={this.props.appState}
            position={this.props.appState.xp4Position}
            company={this.props.appState.xp4Company}
            city={this.props.appState.xp4City}
            from={this.props.appState.xp4From}
            to={this.props.appState.xp4To}
          />
        )}
      </div>
    )
  }
}

export default CvTemplateExperiences
