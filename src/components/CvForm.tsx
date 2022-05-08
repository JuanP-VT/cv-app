import React, { PureComponent } from 'react'
import Education from './CvFormComponents/Education'
import FormPersonalInfo from './CvFormComponents/FormPersonalInfo'
interface Props {
  saveInAppState: (objProp: string, id: string) => void
  savePhotoSrc: () => void
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
      </div>
    )
  }
}
