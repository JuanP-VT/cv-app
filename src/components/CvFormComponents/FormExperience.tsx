import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
  positionId: string
  companyId: string
  cityId: string
  fromId: string
  toId: string
  xpNum: string
  saveInAppState: (objProp: string, id: string) => void
}

class FormExperience extends Component<Props> {
  state = {}

  render() {
    const position = this.props.positionId
    const company = this.props.companyId
    const city = this.props.cityId
    const from = this.props.fromId
    const To = this.props.toId
    return (
      <div className='formExperienceBox'>
        <span className='highlight'>{this.props.xpNum}</span>
        <input
          id={this.props.positionId}
          placeholder='Position'
          onChange={() => this.props.saveInAppState(position, position)}
        />
        <input
          id={this.props.companyId}
          placeholder='Company'
          onChange={() => this.props.saveInAppState(company, company)}
        />
        <input
          id={this.props.cityId}
          placeholder='City'
          onChange={() => this.props.saveInAppState(city, city)}
        />
        <input
          id={this.props.fromId}
          placeholder='From'
          onChange={() => this.props.saveInAppState(from, from)}
        />
        <input
          id={this.props.toId}
          placeholder='To'
          onChange={() => this.props.saveInAppState(To, To)}
        />
      </div>
    )
  }
}

export default FormExperience
