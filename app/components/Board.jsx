import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

const Board = (props) => {
  var index = -1;
  return (
    <div>
      {props.life.map(array => {
        index++;
        return <Row
                handleClick={(target) => props.handleClick(target)}
                key={index.toString()}
                rowData={array}/>
      })}
    </div>
  )
}

export default Board;
