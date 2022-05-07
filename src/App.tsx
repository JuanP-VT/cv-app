/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import CvForm from './components/CvForm'
import Footer from './components/Footer'
import CvTemplate from './components/CvTemplate'

interface State {
  firstName?: string
  lastName?: string
  title?: string
}

class App extends Component<State> {
  state = {}
  saveInAppState = (objProp: string, id: string) => {
    // Parameter id refers to input id
    // Get value of input element
    const input = document.querySelector(`#${id}`) as HTMLInputElement
    const myVal = input.value
    this.setState(
      () => ({
        [objProp]: myVal,
      }),
      () => console.log(this.state),
    )
  }
  render() {
    return (
      <>
        <Header />
        <div id='main'>
          <CvForm saveInAppState={this.saveInAppState} />
          <CvTemplate appState={this.state} />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
