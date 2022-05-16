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
        <div className='highlight accent'>Experience</div>
        {hasExperiencep1 && (
          <FormExperience
            xpNum='Experience 1'
            positionId='xp1Position'
            companyId='xp1Company'
            cityId='xp1City'
            fromId='xp1From'
            toId='xp1To'
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
            positionValue={this.props.appState.xp1Position}
            companyValue={this.props.appState.xp1Company}
            cityValue={this.props.appState.xp1City}
            fromValue={this.props.appState.xp1From}
            toValue={this.props.appState.xp1To}
          />
        )}
        {hasExperiencep2 && (
          <FormExperience
            xpNum='Experience 2'
            positionId='xp2Position'
            companyId='xp2Company'
            cityId='xp2City'
            fromId='xp2From'
            toId='xp2To'
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
            positionValue={this.props.appState.xp2Position}
            companyValue={this.props.appState.xp2Company}
            cityValue={this.props.appState.xp2City}
            fromValue={this.props.appState.xp2From}
            toValue={this.props.appState.xp2To}
          />
        )}
        {hasExperiencep3 && (
          <FormExperience
            xpNum='Experience 3'
            positionId='xp3Position'
            companyId='xp3Company'
            cityId='xp3City'
            fromId='xp3From'
            toId='xp3To'
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
            positionValue={this.props.appState.xp3Position}
            companyValue={this.props.appState.xp3Company}
            cityValue={this.props.appState.xp3City}
            fromValue={this.props.appState.xp3From}
            toValue={this.props.appState.xp3To}
          />
        )}
        {hasExperiencep4 && (
          <FormExperience
            xpNum='Experience 4'
            positionId='xp4Position'
            companyId='xp4Company'
            cityId='xp4City'
            fromId='xp4From'
            toId='xp4To'
            appState={this.props.appState}
            saveInAppState={this.props.saveInAppState}
            positionValue={this.props.appState.xp4Position}
            companyValue={this.props.appState.xp4Company}
            cityValue={this.props.appState.xp4City}
            fromValue={this.props.appState.xp4From}
            toValue={this.props.appState.xp4To}
          />
        )}
        <button id='addExperience' className='button-62' onClick={this.props.handleAddExperience}>
          Add Experience
        </button>
        <button
          id='removeExperience'
          className='button-62'
          onClick={this.props.handleRemoveExperience}
        >
          Remove Experience
        </button>
      </div>
    )
  }
}

export default Experience
