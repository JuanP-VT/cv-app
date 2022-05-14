import React, { Component } from 'react'
import appState from '../interface'
import FormExperience from './FormExperience'

interface Props {
  appState: appState
  saveInAppState: (objProp: string, id: string) => void
}

class Experience extends Component<Props> {
  state = {}

  render() {
    const hasExperiencep1 = this.props.appState.hasExperience1
    const hasExperiencep2 = this.props.appState.hasExperience1
    const hasExperiencep3 = this.props.appState.hasExperience3
    const hasExperiencep4 = this.props.appState.hasExperience4
    return (
      <div id='formExperience'>
        <div className='highlight'>Experience</div>
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
        <button id='addExperience'>Add Experience</button>
      </div>
    )
  }
}

export default Experience
