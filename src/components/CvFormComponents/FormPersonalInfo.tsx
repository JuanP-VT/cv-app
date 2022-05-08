import React, { Component } from 'react'
import PhotoInput from '../photoInput'

interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
}

class FormPersonalInfo extends Component<Props> {
  state = {}

  render() {
    return (
      <>
        <div className='highlight'>Personal Information</div>
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
        <PhotoInput savePhotoSrc={this.props.savePhotoSrc} />
        <input
          id='address'
          type='text'
          placeholder='address'
          onChange={() => this.props.saveInAppState('address', 'address')}
        />
        <input
          id='phoneNumber'
          type='text'
          placeholder='Phone Number'
          onChange={() => this.props.saveInAppState('phoneNumber', 'phoneNumber')}
        />
        <input
          id='email'
          type='text'
          placeholder='Email'
          onChange={() => this.props.saveInAppState('email', 'email')}
        />
        <input
          id='description'
          type='text'
          placeholder='Description'
          onChange={() => this.props.saveInAppState('description', 'description')}
          maxLength={500}
        />
      </>
    )
  }
}

export default FormPersonalInfo
