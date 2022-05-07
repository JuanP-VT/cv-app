import React, { PureComponent } from 'react'
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
      </div>
    )
  }
}
