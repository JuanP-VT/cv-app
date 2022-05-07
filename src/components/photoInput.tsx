import React, { PureComponent } from 'react'

interface Props {
  savePhotoSrc: () => void
}
class photoInput extends PureComponent<Props> {
  render() {
    return (
      <div id='photoInputContainer'>
        <h6 id='photoInputText'>Photo</h6>
        <input id='photoInput' type='file' onChange={() => this.props.savePhotoSrc()} />
      </div>
    )
  }
}

export default photoInput
