import React, { Component } from 'react'
import appState from '../interface'
import PhotoInput from '../photoInput'

interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
  appState: appState
}

class FormPersonalInfo extends Component<Props> {
  state = {}

  render() {
    return (
      <div id='formPersonalInfo'>
        <div className='highlight'>Personal Information</div>
        <input
          id='firstName'
          type='text'
          placeholder='First Name'
          onChange={() => this.props.saveInAppState('firstName', 'firstName')}
          value={this.props.appState.firstName}
        />
        <input
          id='lastName'
          type='text'
          placeholder='Last Name'
          onChange={() => this.props.saveInAppState('lastName', 'lastName')}
          value={this.props.appState.lastName}
        />
        <input
          id='title'
          type='text'
          placeholder='Title'
          onChange={() => this.props.saveInAppState('title', 'title')}
          value={this.props.appState.title}
        />
        <PhotoInput savePhotoSrc={this.props.savePhotoSrc} />
        <input
          id='address'
          type='text'
          placeholder='address'
          onChange={() => this.props.saveInAppState('address', 'address')}
          value={this.props.appState.address}
        />
        <input
          id='phoneNumber'
          type='text'
          placeholder='Phone Number'
          onChange={() => this.props.saveInAppState('phoneNumber', 'phoneNumber')}
          value={this.props.appState.phoneNumber}
        />
        <input
          id='email'
          type='text'
          placeholder='Email'
          onChange={() => this.props.saveInAppState('email', 'email')}
          value={this.props.appState.email}
        />
        <input
          id='description'
          type='text'
          placeholder='Description'
          onChange={() => this.props.saveInAppState('description', 'description')}
          maxLength={500}
          value={this.props.appState.description}
        />
      </div>
    )
  }
}

export default FormPersonalInfo
