/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import CvForm from './components/CvForm'
import Footer from './components/Footer'
import CvTemplate from './components/CvTemplate'
import appState from './components/interface'
import DEMO from './DemoPage'
import jsPDF from 'jspdf'
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
    numOfPages: 0,
    hasPage1: false,
    hasPage2: false,
    hasPage3: false,
    hasPage4: false,
    firstName: '',
    lastName: '',
    title: '',
    photoSrc: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
    uniName: '',
    uniCity: '',
    uniDegree: '',
    uniSubject: '',
    uniFrom: '',
    uniTo: '',
    gitHub: '',
    webPage: '',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    skill7: '',
    skill8: '',
    skill9: '',
    skill1Src: '',
    skill2Src: '',
    skill3Src: '',
    skill4Src: '',
    skill5Src: '',
    skill6Src: '',
    skill7Src: '',
    skill8Src: '',
    skill9Src: '',
    page1Dom: '',
    page1Url: '',
    page1Src: '',
    page2Dom: '',
    page2Url: '',
    page2Src: '',
    page3Dom: '',
    page3Url: '',
    page3Src: '',
    page4Dom: '',
    page4Url: '',
    page4Src: '',
    xp1Position: '',
    xp1Company: '',
    xp1City: '',
    xp1From: '',
    xp1To: '',
    xp2Position: '',
    xp2Company: '',
    xp2City: '',
    xp2From: '',
    xp2To: '',
    xp3Position: '',
    xp3Company: '',
    xp3City: '',
    xp3From: '',
    xp3To: '',
    xp4Position: '',
    xp4Company: '',
    xp4City: '',
    xp4From: '',
    xp4To: '',
    hasExperience1: false,
    hasExperience2: false,
    hasExperience3: false,
    hasExperience4: false,
    numOfExperiences: 0,
  }


  generatePdf = () => {
    const doc = new jsPDF('p', 'pt', 'letter')
    const margin = 15
    doc.html(document.querySelector('#templateContainer') as HTMLElement, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: 0.7,
      },
      callback: function (pdf) {
        pdf.save('myPDF.pdf')
      },
    })
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
  handleIconFile = (objProp: string, id: string) => {
    const myInput = document.querySelector(`#${id}`) as HTMLInputElement
    if (myInput.files !== null) {
      const iconSrc = URL.createObjectURL(myInput.files[0])
      this.setState({
        [objProp]: iconSrc,
      })
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
    if (this.state.numOfSkills < 9) {
      this.setState(
        (prevState: appState) => ({
          numOfSkills: prevState.numOfSkills + 1,
        }),
        this.updateSkillsInState,
      )
    }
  }
  handleRemSkill = () => {
    if (this.state.numOfSkills > 0) {
      this.setState(
        (prevState: appState) => ({
          numOfSkills: prevState.numOfSkills - 1,
        }),
        this.updateSkillsInState,
      )
    }
  }
  handleAddPage = () => {
    if (this.state.numOfPages < 5) {
      this.setState(
        (prevState: appState) => ({
          numOfPages: prevState.numOfPages + 1,
        }),
        this.updatePagesInState,
      )
    }
  }
  handleRemovePage = () => {
    if (this.state.numOfPages > 0) {
      this.setState(
        (prevState: appState) => ({
          numOfPages: prevState.numOfPages - 1,
        }),
        this.updatePagesInState,
      )
    }
  }
  updatePagesInState = () => {
    const currentNumberOfPages = this.state.numOfPages
    /* Setting everything off by default then check conditions to toggle the ones that 
    are required */
    this.setState(
      {
        hasPage1: false,
        hasPage2: false,
        hasPage3: false,
        hasPage4: false,
      },
      () => {
        if (currentNumberOfPages >= 1) {
          this.setState({
            hasPage1: true,
          })
        }
        if (currentNumberOfPages >= 2) {
          this.setState({
            hasPage2: true,
          })
        }
        if (currentNumberOfPages >= 3) {
          this.setState({
            hasPage3: true,
          })
        }
        if (currentNumberOfPages >= 4) {
          this.setState({
            hasPage4: true,
          })
        }
      },
    )
  }
  handleAddExperience = () => {
    if (this.state.numOfExperiences < 4) {
      this.setState(
        (prevState: appState) => ({
          numOfExperiences: prevState.numOfExperiences + 1,
        }),
        this.updateExperienceInState,
      )
    }
  }
  handleRemoveExperience = () => {
    if (this.state.numOfExperiences > 0) {
      this.setState(
        (prevState: appState) => ({
          numOfExperiences: prevState.numOfExperiences - 1,
        }),
        this.updateExperienceInState,
      )
    }
  }
  updateExperienceInState = () => {
    const currentNumberOfExperiences = this.state.numOfExperiences
    /* Setting everything off by default then check conditions to toggle the ones that 
    are required */
    this.setState(
      {
        hasExperience1: false,
        hasExperience2: false,
        hasExperience3: false,
        hasExperience4: false,
      },
      () => {
        if (currentNumberOfExperiences >= 1) {
          this.setState({
            hasExperience1: true,
          })
        }
        if (currentNumberOfExperiences >= 2) {
          this.setState({
            hasExperience2: true,
          })
        }
        if (currentNumberOfExperiences >= 3) {
          this.setState({
            hasExperience3: true,
          })
        }
        if (currentNumberOfExperiences >= 4) {
          this.setState({
            hasExperience4: true,
          })
        }
      },
    )
  }
  loadDemo = () => {
    this.setState(DEMO)
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
            handleRemSkill={this.handleRemSkill}
            handleIconFiles={this.handleIconFile}
            handleAddPage={this.handleAddPage}
            handleRemovePage={this.handleRemovePage}
            handleAddExperience={this.handleAddExperience}
            handleRemoveExperience={this.handleRemoveExperience}
            loadDemo={this.loadDemo}
            generatePdf={this.generatePdf}
          />
          <CvTemplate appState={this.state} />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
