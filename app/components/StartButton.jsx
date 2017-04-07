import React from 'react';

const StartButton = (props) => {
  return(
  <div>
    <button onClick={props.handleStartClick}>{props.startMessage}</button>
    <button onClick={props.handleClearClick}>Clear</button>
  </div>
  )
}

export default StartButton;
