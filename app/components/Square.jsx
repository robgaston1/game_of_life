import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Square = (props) => {2
  return (
    <span>
      <div
        className={(props.val) ? "grid-square live" : "grid-square dead"}
        onClick={(event) => props.handleClick(event.target)}>
      </div>
    </span>
  )
}

export default Square;
