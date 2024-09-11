import React from 'react'
import QuestionMarkIcon from '../assets/images/question-mark.png'
import CircleIcon from '../assets/images/circle.png'

function LessonTab({ videoState, togglePlayPauseRef }) {
  return (
    <div className="lesson-tab-container">
      <div className="lesson-tab-header">
        <div className="start-stop-btn">
          <button onClick={() => togglePlayPauseRef.current()}>{videoState ==="playing" ? "Stop Lesson" : "Start Lesson Mode"}</button>
        </div>
        <div className="lesson-tab-header-text">
        {videoState ==="playing" ? "Click this button to end the lesson" : "Click the play button on the video above also"}
        </div>
      </div>
      <div className="lesson-tab-section teaching-points-section">
        <h4 className="lesson-tab-section-title">Teaching Points</h4>
        <div className="lesson-tab-section-body">
          <div className="question question-1">
            <div className="question-title">
              Introduce yourself in French
            </div>
            <div className="question-description">
              To introduce yourself, the most common sentence you would use in French is ‘Je suis Ludovick Dubrouck’ - I am.... Alternatively, you can say ‘Je m’appelle Ludovick Dubrouck’ - literally translated as I call myself...
            </div>
            <div className="question-info">
              <img src={QuestionMarkIcon} alt="" />
              <span>What is the right form for intoducing yourself?</span>
            </div>
            <div className="question-options-container">
              <div className="option">
                <img src={CircleIcon} alt="" />
                <span>Bonjour, jiapele Marie.</span>
              </div>
              <div className="option">
                <img src={CircleIcon} alt="" />
                <span>Bonjour, j'apelle Marie.</span>
              </div>
              <div className="option">
                <img src={CircleIcon} alt="" />
                <span>Bonjour, je m'appelle Marie.</span>
              </div>
              <div className="option">
                <img src={CircleIcon} alt="" />
                <span>Bonjour, j'appele Marie.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonTab