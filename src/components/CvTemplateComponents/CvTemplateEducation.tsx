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
              <div className='eduFrom'>2007</div> - <div className='eduTo'>2010</div>
            </div>
          </div>
          <div className='eduMain'>
            <div id='uniCityName'>
              <div id='templateUniName'>Tec</div> , <div id='templateUniCityName'>Lm</div>
            </div>
            <div id='uniDegree'>Degree:</div>
            <div id='uniSubject'>Subject:</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CvTemplateEducation
