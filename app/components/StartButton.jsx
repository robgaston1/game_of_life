import React from 'react';

const StartButton = (props) => {
  return(
  <div>
    <button
      className="btn btn-success btn-large"
      onClick={props.handleStartClick}>
      {props.startMessage}
    </button>
    <button
      className="btn btn-large btn-default"
      onClick={props.handleClearClick}>Clear</button>
  </div>
  )
}

export default StartButton;
