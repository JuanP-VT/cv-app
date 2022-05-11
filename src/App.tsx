/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import CvForm from './components/CvForm'
import Footer from './components/Footer'
import CvTemplate from './components/CvTemplate'
import appState from './components/interface'

class App extends Component {
  constructor(props: string) {
    super(props)
    this.handleAddSkill = this.handleAddSkill.bind(this)
  }
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
    // Get the value of input element
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
  updateSkillsInState = () => {
    const currentNumOfSkills = this.state.numOfSkills
    console.log(currentNumOfSkills)
    /* Setting everything off by default then check conditions to toggle the ones that 
    are required */
    this.setState(
      {
        hasSkill1: false,
        hasSkill2: false,
        hasSkill3: false,
        hasSkill4: false,
        hasSkill5: false,
        hasSkill6: false,
        hasSkill7: false,
        hasSkill8: false,
        hasSkill9: false,
      },
      () => {
        if (currentNumOfSkills >= 1) {
          this.setState({
            hasSkill1: true,
          })
        }
        if (currentNumOfSkills >= 2) {
          this.setState({
            hasSkill2: true,
          })
        }
        if (currentNumOfSkills >= 3) {
          this.setState({
            hasSkill3: true,
          })
        }
        if (currentNumOfSkills >= 4) {
          this.setState({
            hasSkill4: true,
          })
        }
        if (currentNumOfSkills >= 5) {
          this.setState({
            hasSkill5: true,
          })
        }
        if (currentNumOfSkills >= 6) {
          this.setState({
            hasSkill6: true,
          })
        }
        if (currentNumOfSkills >= 7) {
          this.setState({
            hasSkill7: true,
          })
        }
        if (currentNumOfSkills >= 8) {
          this.setState({
            hasSkill8: true,
          })
        }
        if (currentNumOfSkills >= 9) {
          this.setState({
            hasSkill9: true,
          })
        }
      },
    )
  }
  handleAddSkill = () => {
    this.setState(
      (prevState: appState) => ({
        numOfSkills: prevState.numOfSkills + 1,
      }),
      this.updateSkillsInState,
    )
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
            handleAddSkill={this.handleAddSkill}
          />
          <CvTemplate appState={this.state} />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
