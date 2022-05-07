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
        <div id='personalDetailsHeader'>Personal Details</div>
        <div className='detailsBox'>
          <div className='detailsIconBox'>
            <img src={addressIcon} alt='addressIcon' className='detailsIcon' />
          </div>
          <div className='detailsInfo'>
            <p className='highlight'>Address</p>
            <p>{this.props.appState.address}</p>
          </div>
        </div>

        <div className='detailsBox'>
          <div className='detailsIconBox'>
            <img src={phoneIcon} alt='phoneIcon' className='detailsIcon' />
          </div>
          <div className='detailsInfo'>
            <p className='highlight'>Phone Number</p>
            <p>{this.props.appState.phoneNumber}</p>
          </div>
        </div>

        <div className='detailsBox'>
          <div className='detailsIconBox'>
            <img src={email} alt='emailIcon' className='detailsIcon' />
          </div>
          <div className='detailsInfo'>
            <p className='highlight'>Email</p>
            <p>{this.props.appState.email}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalDetails
