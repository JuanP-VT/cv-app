/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { PureComponent } from 'react'
import './CvTemplateComponents/CvTemplate.css'
import CvTemplateHeader from './CvTemplateComponents/CvTemplateHeader'
interface Props {
  appState: {
    firstName?: string
    secondName?: string
    title?: string
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
          secondName={this.props.appState.secondName}
          title={this.props.appState.title}
        />
      </div>
    )
  }
}
