import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
}

class CvTemplateDescription extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {}

  render() {
    return (
      <div id='templateDescription'>
        <div className='highlight'>Description</div>
        <div id='descriptionContent'>{this.props.appState.description}</div>
      </div>
    )
  }
}

export default CvTemplateDescription
