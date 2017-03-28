import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Square = (props) => {
  function createSquare () {
    if (props.val === 0) {
      return <div
              className="grid-square dead"
              onClick={(event) => props.handleClick(event.target)}></div>;
    } else {
      return <div
              className="grid-square live"
              onClick={(event) => props.handleClick(event.target)}></div>;
    }
  }

  return (
    <span>
    {createSquare()}
    </span>
  )
}

export default Square;
