import React, { Component } from 'react'
import appState from '../interface'
import FormPage from './FormPage'

interface Props {
  appState: appState
  saveInAppState: (objProp: string, id: string) => void
  handleAddPage: () => void
  handleIconFiles: (objProp: string, id: string) => void
}

class Pages extends Component<Props> {
  render() {
    // This checks how many Skills components are currently needed
    const hasPage1 = this.props.appState.hasPage1
    const hasPage2 = this.props.appState.hasPage2
    const hasPage3 = this.props.appState.hasPage3
    const hasPage4 = this.props.appState.hasPage4
    // Getting their values
    const page1Url = this.props.appState.page1Url
    const page2Url = this.props.appState.page2Url
    const page3Url = this.props.appState.page3Url
    const page4Url = this.props.appState.page4Url

    const page1Dom = this.props.appState.page1Dom
    const page2Dom = this.props.appState.page2Dom
    const page3Dom = this.props.appState.page3Dom
    const page4Dom = this.props.appState.page4Dom

    return (
      <div id='formPages'>
        <div className='highlight'>Pages</div>
        <div id='formPagesContainer'>
          {hasPage1 && (
            <FormPage
              appState={this.props.appState}
              pageUrl={page1Url}
              pageDom={page1Dom}
              saveInAppState={this.props.saveInAppState}
              handleIconFiles={this.props.handleIconFiles}
              pageNum={1}
              refInStateSrc='page1Src'
              refInStateUrl='page1Url'
              refInStateDom='page1Dom'
              urlInputId='urlInput1'
              domInputId='domInput1'
              srcInputId='srcInput1'
            />
          )}
          {hasPage2 && (
            <FormPage
              appState={this.props.appState}
              pageUrl={page2Url}
              pageDom={page2Dom}
              saveInAppState={this.props.saveInAppState}
              handleIconFiles={this.props.handleIconFiles}
              pageNum={2}
              refInStateSrc='page2Src'
              refInStateUrl='page2Url'
              refInStateDom='page2Dom'
              urlInputId='urlInput2'
              domInputId='domInput2'
              srcInputId='srcInput2'
            />
          )}
          {hasPage3 && (
            <FormPage
              appState={this.props.appState}
              pageUrl={page3Url}
              pageDom={page3Dom}
              saveInAppState={this.props.saveInAppState}
              handleIconFiles={this.props.handleIconFiles}
              pageNum={3}
              refInStateSrc='page3Src'
              refInStateUrl='page3Url'
              refInStateDom='page3Dom'
              urlInputId='urlInput3'
              domInputId='domInput3'
              srcInputId='srcInput3'
            />
          )}
          {hasPage4 && (
            <FormPage
              appState={this.props.appState}
              pageUrl={page4Url}
              pageDom={page4Dom}
              saveInAppState={this.props.saveInAppState}
              handleIconFiles={this.props.handleIconFiles}
              pageNum={4}
              refInStateSrc='page4Src'
              refInStateUrl='page4Url'
              refInStateDom='page4Dom'
              urlInputId='urlInput4'
              domInputId='domInput4'
              srcInputId='srcInput4'
            />
          )}
        </div>
        <button className='button-62' id='addPage' onClick={() => this.props.handleAddPage()}>
          Add Page
        </button>
      </div>
    )
  }
}

export default Pages
