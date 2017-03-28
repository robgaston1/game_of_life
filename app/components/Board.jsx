import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

const Board = (props) => {
  var index = 0;
  return (
    <div>
      {props.life.map(array => {
        index++;
        return <Row
                handleClick={() => props.handleClick()}
                key={index.toString()}
                rowData={array}/>
      })}
    </div>
  )
}

export default Board;
