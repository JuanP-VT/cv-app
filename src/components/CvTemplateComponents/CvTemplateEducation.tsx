import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
}

class CvTemplateEducation extends Component<Props> {
  render() {
    return (
      <div id='templateEducation'>
        <div className='highlight'>Education</div>
        <div className='eduBox'>
          <div className='eduSide'>
            <div className='eduDates'>
              <div className='eduFrom highlight'>{this.props.appState.uniFrom}</div>{' '}
              <span className='highlight'> - </span>
              <div className='eduTo highlight'>{this.props.appState.uniTo}</div>
            </div>
          </div>
          <div className='eduMain'>
            <div id='uniCityName'>
              <div id='templateUniName' className='highlight'>
                {this.props.appState.uniName}
              </div>
              <span className='highlight'>,</span>
              <div id='templateUniCityName' className='highlight'>
                {this.props.appState.uniCity}
              </div>
            </div>
            <div id='uniDegree'>
              <span className='highlight'>Degree:</span> {this.props.appState.uniDegree}
            </div>
            <div id='uniSubject'>
              <span className='highlight'>Subject:</span> {this.props.appState.uniSubject}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CvTemplateEducation
