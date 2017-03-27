import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Square = (props) => {
  var index = 0;
  function createSquare () {
    index++;
    if (props.val === 0) {
      return <div key={index.toString()} className="grid-square dead"></div>;
    } else {
      return <div key={index.toString()} className="grid-square live"></div>;
    }
  }

  return (
    <span>
    {createSquare()}
    </span>
  )
}

export default Square;
