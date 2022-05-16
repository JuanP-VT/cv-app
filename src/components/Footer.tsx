import React, { Component } from 'react'
interface Props {
  loadDemo: () => void
  generatePdf: () => void
}

export default class Footer extends Component<Props> {
  render() {
    return (
      <div>
        <button id='demoPageBtn' onClick={() => this.props.loadDemo()}>
          Demo
        </button>
        <button id='generatePDF' onClick={this.props.generatePdf}>
          PDF
        </button>
      </div>
    )
  }
}
