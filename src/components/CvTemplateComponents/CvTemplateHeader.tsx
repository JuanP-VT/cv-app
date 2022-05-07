import React, { PureComponent } from 'react'

interface Props {
  firstName?: string
  secondName?: string
  title?: string
}

class CvTemplateHeader extends PureComponent<Props> {
  render() {
    return (
      <div id='cvHeader'>
        <div id='names'>
          <div id='cvFirstName'>{this.props.firstName}</div>
          <div id='cvSecondName'>{this.props.secondName}</div>
        </div>
        <div id='cvTitle'>{this.props.title}</div>
      </div>
    )
  }
}

export default CvTemplateHeader
