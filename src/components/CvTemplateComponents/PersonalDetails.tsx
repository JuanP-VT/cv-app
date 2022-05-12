import React, { Component } from 'react'
import appState from '../interface'
import addressIcon from '../img/address.png'
import phoneIcon from '../img/phone.png'
import email from '../img/email.png'
interface Props {
  appState: appState
}
class PersonalDetails extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {}

  render() {
    return (
      <div id='personalDetails'>
        <div id='personalDetailsHeader' className='highlight'>
          Personal Details
        </div>

        <div className='detailsBox'>
          <div className='detailsBoxTop'>
            <div className='detailsIconBox'>
              <img src={addressIcon} alt='addressIcon' className='detailsIcon' />
            </div>
            <p className='highlight personalInfoContent'>Address</p>
          </div>
          <div className='detailsBoxBot'>
            <p>{this.props.appState.address}</p>
          </div>
        </div>

        <div className='detailsBox'>
          <div className='detailsBoxTop'>
            <img src={phoneIcon} alt='phoneIcon' className='detailsIcon' />
            <p className='highlight personalInfoContent'>Phone Number</p>
          </div>
          <div className='detailsBoxBot'>
            <p>{this.props.appState.phoneNumber}</p>
          </div>
        </div>

        <div className='detailsBox'>
          <div className='detailsBoxTop'>
            <img src={email} alt='emialIcon' className='detailsIcon' />
            <p className='highlight personalInfoContent'>Email</p>
          </div>
          <div className='detailsBoxBot'>
            <p>{this.props.appState.email}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalDetails
