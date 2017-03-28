import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

const Row = (props) => {
  var index = 0;
  return (
    <div className="rows">
      {props.rowData.map(value => {
        index++;
        return <Square
                handleClick={() => props.handleClick()}
                key={index.toString()}
                val={value}/>
      })}
    </div>
  )
}

export default Row;
