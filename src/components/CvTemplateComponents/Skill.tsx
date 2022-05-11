import React, { Component } from 'react'

interface Props {
  skill?: string
}

class Skill extends Component<Props> {
  state = {}

  render() {
    return (
      <div className='skillBox'>
        <div className='skillIcon'>
          <img src='asw/.d' />
        </div>
        <div className='skillContent'>{this.props.skill}</div>
      </div>
    )
  }
}

export default Skill
