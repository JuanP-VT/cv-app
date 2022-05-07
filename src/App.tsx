/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import CvForm from './components/CvForm'
import Footer from './components/Footer'
import CvTemplate from './components/CvTemplate'

interface State {}

class App extends Component<State> {
  state = {}

  //pending
  saveInAppState(): void {
    console.log(this)
  }
  render() {
    return (
      <>
        <Header />
        <div id='main'>
          <CvForm />
          <CvTemplate />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
