import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

class Game extends Component {

  constructor(props) {
    super(props)
    var generateLife = function () {
      //create a function later that will generate random 0s and 1s
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
    let boardArray = this.state.life.slice();
    for (let i = 0; i < boardArray.length; i++) {
      for (let j = 0; j < boardArray[i].length; j++) {
        let amtNeighbors = this.checkNeighbors(j, i);
        if (boardArray[i][j] === 0 && amtNeighbors === 3) {
          boardArray[i][j] = 1;
        } else if (boardArray[i][j] === 1 && (amtNeighbors < 2 || amtNeighbors > 3)) {
          boardArray[i][j] = 0;
        }
      }
    }
    this.setState({life: boardArray});
  }

  changeSquare (target) {
    var id = target.getAttribute('data-reactid').toString();
    var row = id.substring(6,7);
    var index = id.substring(9,10)
    let boardArray = this.state.life.slice();
    boardArray[row][index] === 1 ? boardArray[row][index] = 0 : boardArray[row][index] = 1;
    this.setState({ life: boardArray});
  }

  render () {
    return (
      <div className="container text-center">
        <Board life={this.state.life} handleClick={(target) => this.changeSquare(target)}/>
        <button onClick={this.startCycle}>Start</button>
        <button onClick={this.stopCycle}>Stop</button>
      </div>
    );
  }
}

export default Game;
