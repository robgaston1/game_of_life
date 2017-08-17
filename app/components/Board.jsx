import React, {Component} from 'react';
import Row from './Row';

const Board = (props) => {
  function mapLife(life) {
    return (
      <div className="grid">
        {life.map(array => {
          index++;
          return <Row
                  handleClick={(target) => props.handleClick(target)}
                  key={index.toString()}
                  rowData={array}/>
        })}
      </div>
    )
  };
  var index = -1;
  return (
    <div>
      {(props.life === []) ? <p>Loading</p> : mapLife(props.life)}
    </div>

  )
}

export default Board;
