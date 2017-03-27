import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

class Game extends React.Component {

  constructor(props) {
    super(props)
    var generateLife = function () {
      //create a function under generateLife that will
    return [[0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            ];
    }
    this.state = {
      life: generateLife()
    }
    this.iterateCells = this.iterateCells.bind(this);
    this.checkNeighbors = this.checkNeighbors.bind(this);
    this.startCycle = this.startCycle.bind(this);
    this.stopCycle = this.stopCycle.bind(this);
  }

  startCycle () {
    var intervalId = setInterval(this.iterateCells, 300);
    this.setState({intervalId: intervalId});
  }

  stopCycle () {
    clearInterval(this.state.intervalId);
  }

  checkNeighbors (cellX, cellY) {
    var that = this;
    var acc = 0;
    var coordinates = [[-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];
    var neighbors = coordinates.forEach(function(coords) {
      var neighborX = cellX + coords[0];
      var neighborY = cellY + coords[1];
      if (neighborX >= 0 && neighborY >=0 && neighborY < that.state.life.length) {
        var neighborCoord = that.state.life[neighborY][neighborX];
        if (neighborCoord !== 'undefined' && neighborCoord === 1) {
          acc++;
        }
      }
    });
    return acc;
  }

  iterateCells () {
    let boardArray = this.state.life;
    for (var i = 0; i < boardArray.length; i++) {
      for (var j = 0; j < boardArray[i].length; j++) {
        var amtNeighbors = this.checkNeighbors(j, i);
        if (boardArray[i][j] === 0 && amtNeighbors === 3) {
          boardArray[i][j] = 1;
        } else if (boardArray[i][j] === 1 && (amtNeighbors < 2 || amtNeighbors > 3)) {
          boardArray[i][j] = 0;
        }
      }
    }
    this.setState({life: boardArray});
  }

  changeSquare (e) {
    console.log(e);
  }

  render () {
    return (
      <div className="container text-center">
        <Board life={this.state.life} handleSquareClick={(e) => this.changeSquare(e)}/>
        <button onClick={this.startCycle}>Start</button>
        <button onClick={this.stopCycle}>Stop</button>
      </div>
    );
  }
}

export default Game;
