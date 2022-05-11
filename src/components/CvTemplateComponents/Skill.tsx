import React, { Component } from 'react'

interface Props {
  skill?: string
  skillSrc?: string
}

class Skill extends Component<Props> {
  state = {}

  render() {
    return (
      <div className='skillBox'>
        <div className='skillIcon'>
          <img className='skill-icon' src={this.props.skillSrc} />
        </div>
        <div className='skillContent'>{this.props.skill}</div>
      </div>
    )
  }
}

export default Skill
