import React, { Component } from 'react'

export class home extends Component {
  render() {
    return (
      <div className=' container'>
        <model-viewer  id="mod"  autoplay  shadow-intensity="1" interaction-prompt="none" src="./src/assets/image/watch.glb" alt="dragon" camera-controls disable-pan disable-tap disable-zoom min-camera-orbit='-90deg 75deg 0deg' max-camera-orbit= '90deg 75deg 0deg' >kjhg</model-viewer>
      </div>
    )
  }
}

export default home