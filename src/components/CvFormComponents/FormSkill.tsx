import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
  refNum: string
  refInState: string
  srcRef: string
  skillValue: string | undefined
  saveInAppState: (objProp: string, id: string) => void
  handleIconFiles: (objProp: string, id: string) => void
}

class FormSkill extends Component<Props> {
  state = {}

  render() {
    const Iid = this.props.refInState
    const srcId = this.props.srcRef
    return (
      <div className='formSkillBox'>
        <div className='formSkillInput'>
          <span className='highlight-low'>Skill{this.props.refNum}</span>
          <input
            id={this.props.refInState}
            onChange={() => this.props.saveInAppState(Iid, Iid)}
            value={this.props.skillValue}
          />
        </div>
        <div className='skillTemplateIcon'>
          <input
            type='file'
            name='imageIcon'
            id={this.props.srcRef}
            className='inputIconSkill'
            onChange={() => this.props.handleIconFiles(srcId, srcId)}
          />
          <span className='templateIconStamp'> Add an icon for your skill</span>
        </div>
      </div>
    )
  }
}

export default FormSkill
