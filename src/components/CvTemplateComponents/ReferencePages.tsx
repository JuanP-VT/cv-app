import React, { Component } from 'react'
import appState from '../interface'
import gitHubIcon from '../img/github.png'
import myPage from '../img/webpage.png'
interface Props {
  appState: appState
}

class ReferencePages extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {}

  render() {
    return (
      <div id='templatePages'>
        <div id='templatePagesHeader' className='highlight'>
          Pages
        </div>

        <div className='detailsBox'>
          <div className='detailsBoxTop'>
            <div className='detailsIconBox'>
              <img src={gitHubIcon} alt='gitHubIcon' className='detailsIcon' />
            </div>
            <p className='highlight personalInfoContent'>GitHub</p>
          </div>
          <div className='detailsBoxBot'>
            <p>{this.props.appState.gitHub}</p>
          </div>
        </div>

        <div className='detailsBox'>
          <div className='detailsBoxTop'>
            <div className='detailsIconBox'>
              <img src={myPage} alt='myPageIcon' className='detailsIcon' />
            </div>
            <p className='highlight personalInfoContent'>My WebPage</p>
          </div>
          <div className='detailsBoxBot'>
            <p>{this.props.appState.webPage}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReferencePages
