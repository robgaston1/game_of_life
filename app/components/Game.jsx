import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//  create function to generate a random array?(LATER)
//  create listener on each square to toggle from dead to alive
  //  means have to change it's associated value in the state array
//  write the function to check for neighbors on each array value
  //and create the new array value, then set the new array(s) to state.


const LiveSquare = () => {
  return (
    <div className="grid-square live">
  </div>
  );
}

const DeadSquare = () => {
  return (
    <div className="grid-square dead">
  </div>
  );
}

const Row = (props) => {
  var createSquare = function (value) {
   if (value === 0) {
     return <DeadSquare/>;
   } else return <LiveSquare/>
}
  return (
    <div className="rows">
      {props.rowData.map(value => createSquare(value))}
    </div>
  )
}

const Board = (props) => {
  return (
    <div>
      {props.life.map(function (array) {
        return <Row rowData={array}/>
      })}
    </div>
  )
}

class Game extends React.Component {

  constructor(props) {
    super(props)
    var generateLife = function () {
    return [[0, 1, 0, 1, 1],
            [1, 1, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1]
            ];
    }
    this.state = {
      life: generateLife()
    }
    this.cycle = this.cycle.bind(this);
    this.checkNeighbors = this.checkNeighbors.bind(this);
  }

  cycle () {
    var that = this;
    var timer = setInterval (function () {
      that.checkNeighbors();
    }, 1000)
  }

  checkNeighbors () {
    console.log(this.state.life);
  }

  render () {
    return (
      <div className="container text-center">
        <Board life={this.state.life}/>
        <button onClick={this.cycle}>Start</button>
      </div>
    );
  }
}

export default Game;
