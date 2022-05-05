import React, { PureComponent } from 'react'

interface Props {
  firstName: string
  secondName: string
  title: string
}

class CvTemplateHeader extends PureComponent<Props> {
  render() {
    return (
      <div id='cvHeader'>
        <div id='names'>
          <div id='cvFirstName'></div>
          <div id='cvSecondName'></div>
          <div id='cvTitle'></div>
        </div>
      </div>
    )
  }
}

export default CvTemplateHeader
