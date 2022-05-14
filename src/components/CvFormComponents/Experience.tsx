import React, { Component } from 'react'
import appState from '../interface'
import FormExperience from './FormExperience'

interface Props {
  appState: appState
  saveInAppState: (objProp: string, id: string) => void
  handleAddExperience: () => void
  handleRemoveExperience: () => void
}

class Experience extends Component<Props> {
  state = {}

  render() {
    const hasExperiencep1 = this.props.appState.hasExperience1
    const hasExperiencep2 = this.props.appState.hasExperience2
    const hasExperiencep3 = this.props.appState.hasExperience3
    const hasExperiencep4 = this.props.appState.hasExperience4
    return (
      <div id='formExperience'>
        <div className='highlight'>Experience</div>
        {hasExperiencep1 && (
          <FormExperience
            xpNum='Experience 1'
            positionId='xp1Position'
            companyId='xp1Company'
            cityId='xp1City'
            fromId='xp1From'
            toId='xp1To '
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasExperiencep2 && (
          <FormExperience
            xpNum='Experience 2'
            positionId='xp2Position'
            companyId='xp2Company'
            cityId='xp2City'
            fromId='xp2From'
            toId='xp2To '
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasExperiencep3 && (
          <FormExperience
            xpNum='Experience 3'
            positionId='xp3Position'
            companyId='xp3Company'
            cityId='xp3City'
            fromId='xp3From'
            toId='xp3To '
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
          />
        )}
        {hasExperiencep4 && (
          <FormExperience
            xpNum='Experience 4'
            positionId='xp4Position'
            companyId='xp4Company'
            cityId='xp4City'
            fromId='xp4From'
            toId='xp4To '
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
          />
        )}
        <button id='addExperience' onClick={this.props.handleAddExperience}>
          Add Experience
        </button>
        <button id='removeExperience' onClick={this.props.handleRemoveExperience}>
          Remove Experience
        </button>
      </div>
    )
  }
}

export default Experience
