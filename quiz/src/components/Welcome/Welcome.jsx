import React from 'react'
import Quiz from '../../img/quiz.svg'
import './welcome.css'

const Welcome = () => {
  return (
    <div id="Welcome">
        <h2>Welcome Boy</h2>
        <p>Click on the button to start</p>
        <button>Start</button>
        <img src={Quiz} alt="Inicio do quiz"/>
    </div>
  )
}

export default Welcome