import React, { PureComponent } from 'react'

class photoInput extends PureComponent {
  render() {
    return (
      <div id='photoInputContainer'>
        <h6 id='photoInputText'>Photo</h6>
        <input id='photoInput' type='file' />
      </div>
    )
  }
}

export default photoInput
