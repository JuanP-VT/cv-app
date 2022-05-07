import React, { PureComponent } from 'react'
import PhotoInput from './photoInput'
interface Props {
  saveInAppState: (objProp: string, id: string) => void
}

export default class CvForm extends PureComponent<Props> {
  render() {
    return (
      <div id='cvFormContainer'>
        <input
          id='firstName'
          type='text'
          placeholder='First Name'
          onChange={() => this.props.saveInAppState('firstName', 'firstName')}
        />
        <input
          id='lastName'
          type='text'
          placeholder='Last Name'
          onChange={() => this.props.saveInAppState('lastName', 'lastName')}
        />
        <input
          id='title'
          type='text'
          placeholder='Title'
          onChange={() => this.props.saveInAppState('title', 'title')}
        />
        <PhotoInput />
      </div>
    )
  }
}
