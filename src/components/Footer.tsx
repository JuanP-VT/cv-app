import React, { Component } from 'react'
interface Props {
  loadDemo: () => void
}

export default class Footer extends Component<Props> {
  render() {
    return (
      <div>
        <button id='demoPageBtn' onClick={() => this.props.loadDemo()}>
          Demo
        </button>
      </div>
    )
  }
}
