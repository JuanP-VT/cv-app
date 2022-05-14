import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
  position: string
  company: string
  city: string
  from: string
  to: string
}

class ExperienceTemplate extends Component<Props> {
  render() {
    return (
      <div className='experienceTemplateContainer'>
        <div className='experienceTemplateDates'>
          <p className='highlight'>{this.props.from}</p> <span className='highlight'> - </span>{' '}
          <p className='highlight'>{this.props.to}</p>
        </div>
        <div className='experienceTemplatesContent'>
          <div className='experienceTemplateTop'>
            <p className='highlight'>{this.props.position}</p>
          </div>
          <div className='experienceTemplateBot'>
            <p>{this.props.company}</p>
            <span>., </span> <p className='padLeft'>{this.props.city}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceTemplate
