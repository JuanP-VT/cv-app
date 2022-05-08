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
          <div className='detailsIconBox'>
            <img src={gitHubIcon} alt='emailIcon' className='detailsIcon' />
          </div>
          <div className='detailsInfo'>
            <p className='highlight'>GitHub</p>
            {/* <p>{this.props.appState.email}</p> */}
          </div>
        </div>
        <div className='detailsBox'>
          <div className='detailsIconBox'>
            <img src={myPage} alt='emailIcon' className='detailsIcon' />
          </div>
          <div className='detailsInfo'>
            <p className='highlight'>My WebPage</p>
            {/* <p>{this.props.appState.email}</p> */}
          </div>
        </div>
      </div>
    )
  }
}

export default ReferencePages
