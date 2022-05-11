import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
}

class Skill extends Component<Props> {
  state = {}

  render() {
    return (
      <div className='skillBox'>
        <div className='skillIcon'>
          <img src='asw/.d' />
        </div>
        <div className='skillContent'>Javascript</div>
      </div>
    )
  }
}

export default Skill
