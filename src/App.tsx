/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import CvForm from './components/CvForm'
import Footer from './components/Footer'
import CvTemplate from './components/CvTemplate'

class App extends Component {
  state = {
    numOfSkills: 0,
    hasSkill1: false,
    hasSkill2: false,
    hasSkill3: false,
    hasSkill4: false,
    hasSkill5: false,
    hasSkill6: false,
    hasSkill7: false,
    hasSkill8: false,
    hasSkill9: false,
  }
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
          <CvForm
            appState={this.state}
            saveInAppState={this.saveInAppState}
            savePhotoSrc={this.savePhotoSrc}
          />
          <CvTemplate appState={this.state} />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
