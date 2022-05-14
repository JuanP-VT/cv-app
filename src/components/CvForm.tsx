import React, { PureComponent } from 'react'
import Education from './CvFormComponents/Education'
import Experience from './CvFormComponents/Experience'
import FormPersonalInfo from './CvFormComponents/FormPersonalInfo'
import Pages from './CvFormComponents/Pages'
import Skills from './CvFormComponents/Skills'
import appState from './interface'
interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
  handleAddSkill: () => void
  handleRemSkill: () => void
  handleIconFiles: (objProp: string, id: string) => void
  handleAddPage: () => void
  handleRemovePage: () => void
  appState: appState
}

export default class CvForm extends PureComponent<Props> {
  render() {
    return (
      <div id='cvFormContainer'>
        <FormPersonalInfo
          saveInAppState={this.props.saveInAppState}
          savePhotoSrc={this.props.savePhotoSrc}
          appState={this.props.appState}
        />
        <Education
          saveInAppState={this.props.saveInAppState}
          savePhotoSrc={this.props.savePhotoSrc}
          appState={this.props.appState}
        />
        <Pages
          appState={this.props.appState}
          saveInAppState={this.props.saveInAppState}
          handleAddPage={this.props.handleAddPage}
          handleIconFiles={this.props.handleIconFiles}
          handleRemovePage={this.props.handleRemovePage}
        />
        <Skills
          appState={this.props.appState}
          saveInAppState={this.props.saveInAppState}
          savePhotoSrc={this.props.savePhotoSrc}
          handleAddSkill={this.props.handleAddSkill}
          handleRemSkills={this.props.handleRemSkill}
          handleIconFiles={this.props.handleIconFiles}
        />
        <Experience appState={this.props.appState} />
      </div>
    )
  }
}
