import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
  id: string
}

class FormExperience extends Component<Props> {
  state = {}

  render() {
    return (
      <div className='formExperienceBox'>
        <span className='highlight'>Xp 1</span>

        <input placeholder='Position' />
        <input placeholder='Company' />
        <input placeholder='City' />
        <input placeholder='From' />
        <input placeholder='To' />
      </div>
    )
  }
}

export default FormExperience
