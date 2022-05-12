import React, { Component } from 'react'
import appState from '../interface'
interface Props {
  appState: appState
}

class ReferencePages extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {}

  render() {
    const hasPage1 = this.props.appState.hasPage1
    const hasPage2 = this.props.appState.hasPage2
    const hasPage3 = this.props.appState.hasPage3
    const hasPage4 = this.props.appState.hasPage4

    return (
      <div id='templatePages'>
        <div id='templatePagesHeader' className='highlight'>
          Pages
        </div>

        {hasPage1 && (
          <div className='detailsBox'>
            <div className='detailsBoxTop'>
              <img src={this.props.appState.page1Src} alt='' className='detailsIcon' />
              <p className='highlight personalInfoContent'>{this.props.appState.page1Dom}</p>
            </div>
            <div className='detailsBoxBot'>
              <p>{this.props.appState.page1Url}</p>
            </div>
          </div>
        )}
        {hasPage2 && (
          <div className='detailsBox'>
            <div className='detailsBoxTop'>
              <img src={this.props.appState.page2Src} alt='' className='detailsIcon' />
              <p className='highlight personalInfoContent'>{this.props.appState.page2Dom}</p>
            </div>
            <div className='detailsBoxBot'>
              <p>{this.props.appState.page2Url}</p>
            </div>
          </div>
        )}
        {hasPage3 && (
          <div className='detailsBox'>
            <div className='detailsBoxTop'>
              <img src={this.props.appState.page3Src} alt='' className='detailsIcon' />
              <p className='highlight personalInfoContent'>{this.props.appState.page3Dom}</p>
            </div>
            <div className='detailsBoxBot'>
              <p>{this.props.appState.page3Url}</p>
            </div>
          </div>
        )}
        {hasPage4 && (
          <div className='detailsBox'>
            <div className='detailsBoxTop'>
              <img src={this.props.appState.page4Src} alt='' className='detailsIcon' />
              <p className='highlight personalInfoContent'>{this.props.appState.page4Dom}</p>
            </div>
            <div className='detailsBoxBot'>
              <p>{this.props.appState.page4Url}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ReferencePages
