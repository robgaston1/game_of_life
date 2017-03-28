import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Square = (props) => {
  var index = 0;
  function createSquare () {
    if (props.val === 0) {
      return <div
              className="grid-square dead"
              onClick={() => props.handleClick(console.log(event))}></div>;
    } else {
      return <div
              className="grid-square live"
              onClick={() => props.handleClick()}></div>;
    }
  }

  return (
    <span>
    {createSquare()}
    </span>
  )
}

export default Square;
