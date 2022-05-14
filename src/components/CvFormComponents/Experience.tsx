import React, { Component } from 'react'
import appState from '../interface'
import FormExperience from './FormExperience'

interface Props {
  appState: appState
}

class Experience extends Component<Props> {
  state = {}

  render() {
    return (
      <div id='formExperience'>
        <span className='highlight'>Xp 1</span>
        <div className='highlight'>Experience</div>
        <FormExperience id='' appState={this.props.appState} />
        <FormExperience id='' appState={this.props.appState} />
      </div>
    )
  }
}

export default Experience
