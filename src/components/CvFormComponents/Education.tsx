import React, { Component } from 'react'
import appState from '../interface'
interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
  appState: appState
}
class Education extends Component<Props> {
  state = {}

  render() {
    return (
      <div id='templateEducation'>
        <div className='highlight'>Education</div>
        <input
          id='uniName'
          type='text'
          placeholder='University Name'
          onChange={() => this.props.saveInAppState('uniName', 'uniName')}
          value={this.props.appState.uniName}
        />
        <input
          id='uniCity'
          type='text'
          placeholder='City'
          onChange={() => this.props.saveInAppState('uniCity', 'uniCity')}
          value={this.props.appState.uniCity}
        />
        <input
          id='uniDegree'
          type='text'
          placeholder='Degree'
          onChange={() => this.props.saveInAppState('uniDegree', 'uniDegree')}
          value={this.props.appState.uniDegree}
        />
        <input
          id='uniSubject'
          type='text'
          placeholder='Subject'
          onChange={() => this.props.saveInAppState('uniSubject', 'uniSubject')}
          value={this.props.appState.uniSubject}
        />
        <input
          id='uniFrom'
          type='text'
          placeholder='From'
          onChange={() => this.props.saveInAppState('uniFrom', 'uniFrom')}
          value={this.props.appState.uniFrom}
        />
        <input
          id='uniTo'
          type='text'
          placeholder='To'
          onChange={() => this.props.saveInAppState('uniTo', 'uniTo')}
          value={this.props.appState.uniTo}
        />
      </div>
    )
  }
}

export default Education
