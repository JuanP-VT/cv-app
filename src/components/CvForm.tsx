import React, { PureComponent } from 'react'
import Education from './CvFormComponents/Education'
import FormPersonalInfo from './CvFormComponents/FormPersonalInfo'
import Skills from './CvFormComponents/Skills'
import appState from './interface'
interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
  handleAddSkill: () => void
  handleIconFiles: (objProp: string, id: string) => void
  appState: appState
}

export default class CvForm extends PureComponent<Props> {
  render() {
    return (
      <div id='cvFormContainer'>
        <FormPersonalInfo
          saveInAppState={this.props.saveInAppState}
          savePhotoSrc={this.props.savePhotoSrc}
        />
        <Education
          saveInAppState={this.props.saveInAppState}
          savePhotoSrc={this.props.savePhotoSrc}
        />
        <Skills
          appState={this.props.appState}
          saveInAppState={this.props.saveInAppState}
          savePhotoSrc={this.props.savePhotoSrc}
          handleAddSkill={this.props.handleAddSkill}
          handleIconFiles={this.props.handleIconFiles}
        />
      </div>
    )
  }
}
