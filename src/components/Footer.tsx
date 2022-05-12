import React, { Component } from 'react'
interface Props {
  loadDemo: () => void
}

export default class Footer extends Component<Props> {
  render() {
    return (
      <div>
        Footer{' '}
        <button id='demoPageBtn' onClick={() => this.props.loadDemo()}>
          Demo
        </button>
      </div>
    )
  }
}
