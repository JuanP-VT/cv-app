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
  photoSrc?: string
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
  savePhotoSrc = () => {
    const input = document.querySelector('#photoInput') as HTMLInputElement
    if (input.files !== null) {
      const photoSrc = URL.createObjectURL(input.files[0])
      this.setState(() => ({
        photoSrc: photoSrc,
      }))
    }
  }
  render() {
    return (
      <>
        <Header />
        <div id='main'>
          <CvForm saveInAppState={this.saveInAppState} savePhotoSrc={this.savePhotoSrc} />
          <CvTemplate appState={this.state} />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
