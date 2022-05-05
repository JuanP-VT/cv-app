/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

interface State {}

class App extends Component<State> {
  constructor(props: string) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <Header />
        <div id='main'>
          {/* <CvForm/>  */}
          {/* <CvTemplate/> */}
        </div>
        <Footer />
      </>
    )
  }
}

export default App
