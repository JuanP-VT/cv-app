/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { PureComponent } from 'react'
import './CvTemplateComponents/CvTemplate.css'
import CvTemplateHeader from './CvTemplateComponents/CvTemplateHeader'
interface Props {}

export default class CvTemplate extends PureComponent<Props> {
  render() {
    return (
      <div>
        <CvTemplateHeader firstName='' secondName='' title='' />
      </div>
    )
  }
}
