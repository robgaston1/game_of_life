import React, {Component} from 'react';
import Square from './Square';

const Row = (props) => {
  var index = -1;
  return (
    <div className="rows">
      {props.rowData.map(value => {
        index++;
        return <Square
                handleClick={(target) => props.handleClick(target)}
                key={index.toString()}
                val={value}/>
      })}
    </div>
  )
}

export default Row;
