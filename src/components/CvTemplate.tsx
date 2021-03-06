/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { PureComponent } from 'react'
import './CvTemplateComponents/CvTemplate.css'
import CvTemplateDescription from './CvTemplateComponents/CvTemplateDescription'
import CvTemplateEducation from './CvTemplateComponents/CvTemplateEducation'
import CvTemplateExperiences from './CvTemplateComponents/CvTemplateExperiences'
import CvTemplateHeader from './CvTemplateComponents/CvTemplateHeader'
import CvTemplateSkills from './CvTemplateComponents/CvTemplateSkills'
import PersonalDetails from './CvTemplateComponents/PersonalDetails'
import ReferencePages from './CvTemplateComponents/ReferencePages'
import appState from './interface'
interface Props {
  appState: appState
}

export default class CvTemplate extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <div id='templateContainer'>
        <CvTemplateHeader
          firstName={this.props.appState.firstName}
          secondName={this.props.appState.lastName}
          title={this.props.appState.title}
        />
        <div id='templateBody'>
          <div id='templateMain'>
            <CvTemplateDescription appState={this.props.appState} />
            <CvTemplateEducation appState={this.props.appState} />
            <CvTemplateSkills appState={this.props.appState} />
            <CvTemplateExperiences appState={this.props.appState} />
          </div>
          <div id='templateSide'>
            <div id='photoContainer'>
              <img id='userPhoto' src={this.props.appState.photoSrc} alt='userPicture' />
            </div>
            <PersonalDetails appState={this.props.appState} />
            <ReferencePages appState={this.props.appState} />
          </div>
        </div>
      </div>
    )
  }
}
