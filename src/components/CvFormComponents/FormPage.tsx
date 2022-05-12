import React, { Component } from 'react'
import appState from '../interface'

interface Props {
  appState: appState
  pageDom: string | undefined
  pageUrl: string | undefined
  saveInAppState: (objProp: string, id: string) => void
  handleIconFiles: (objProp: string, id: string) => void
  pageNum: number
  refInStateSrc: string
  refInStateUrl: string
  refInStateDom: string
  urlInputId: string
  domInputId: string
  srcInputId: string
}

class FormPage extends Component<Props> {
  state = {}

  render() {
    const Url = this.props.refInStateUrl
    const Dom = this.props.refInStateDom
    const Src = this.props.refInStateSrc
    const domInputId = this.props.domInputId
    const urlInputId = this.props.urlInputId
    const srcInputId = this.props.srcInputId
    return (
      <div className='pagesFormBox'>
        <div>
          <span className='highlight'>Page {this.props.pageNum}</span>
          <div className='formPagesInput'>
            <input
              id={this.props.domInputId}
              type='text'
              placeholder='Page Domain eg"GitHub"'
              onChange={() => this.props.saveInAppState(Dom, domInputId)}
            />
            <input
              id={this.props.urlInputId}
              type='text'
              placeholder='Page URL"'
              onChange={() => this.props.saveInAppState(Url, urlInputId)}
            />
          </div>
          <div className='skillTemplateIcon'>
            <input
              id={this.props.srcInputId}
              type='file'
              name=''
              className='inputIconSkill'
              onChange={() => this.props.handleIconFiles(Src, srcInputId)}
            />
            <span className='templateIconStamp'> Add an icon for your WebPage</span>
          </div>
        </div>
      </div>
    )
  }
}

export default FormPage
