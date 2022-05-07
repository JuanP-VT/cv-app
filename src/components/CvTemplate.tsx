/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { PureComponent } from 'react'
import './CvTemplateComponents/CvTemplate.css'
import CvTemplateHeader from './CvTemplateComponents/CvTemplateHeader'
interface Props {
  appState: {
    firstName?: string
    lastName?: string
    title?: string
    photoSrc?: string
  }
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
          <div id='templateMain'></div>
          <div id='templateSide'>
            <div id='photoContainer'>
              <img id='userPhoto' src={this.props.appState.photoSrc} alt='userPicture' />
            </div>
            <div id='personalDetails'></div>
            <div id='referencePages'></div>
          </div>
        </div>
      </div>
    )
  }
}
