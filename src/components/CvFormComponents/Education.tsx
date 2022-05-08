import React, { Component } from 'react'
interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
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
        />
        <input
          id='uniCity'
          type='text'
          placeholder='City'
          onChange={() => this.props.saveInAppState('uniCity', 'uniCity')}
        />
        <input
          id='uniDegree'
          type='text'
          placeholder='Degree'
          onChange={() => this.props.saveInAppState('uniDegree', 'uniDegree')}
        />
        <input
          id='uniSubject'
          type='text'
          placeholder='Subject'
          onChange={() => this.props.saveInAppState('uniSubject', 'uniSubject')}
        />
        <input
          id='uniFrom'
          type='text'
          placeholder='From'
          onChange={() => this.props.saveInAppState('uniFrom', 'uniFrom')}
        />
        <input
          id='uniTo'
          type='text'
          placeholder='To'
          onChange={() => this.props.saveInAppState('uniTo', 'uniTo')}
        />
      </div>
    )
  }
}

export default Education
