import React, { PureComponent } from 'react'
import PhotoInput from './photoInput'

interface Props {
  saveInAppState: () => void
}

export default class CvForm extends PureComponent<Props> {
  render() {
    return (
      <div id='cvFormContainer'>
        <input id='firstName' type='text' placeholder='First Name' />
        <input id='lastName' type='text' placeholder='Last Name' />
        <input id='Title' type='text' placeholder='Title' />
        <PhotoInput />
      </div>
    )
  }
}
