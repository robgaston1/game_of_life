import React, {Component} from 'react';
import Board from './Board';
import GridButtons from './GridButtons';

class Game extends Component {

  constructor(props) {
    super(props)

    this.state = {
      life: this.generateLife(10, 10),
      generation: 0
    }
    this.iterateCells = this.iterateCells.bind(this);
    this.checkNeighbors = this.checkNeighbors.bind(this);
    this.startCycle = this.startCycle.bind(this);
    this.stopCycle = this.stopCycle.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.generateLife = this.generateLife.bind(this);
  }

  generateLife (x, y) {
    let life = [];
    for (var i = 0; i < y; i++) {
      let row = [];
      for (var j = 0; j < x; j++) {
        let val = Math.round(Math.random());
        row.push(val);
      }
      life.push(row);
    }
    return life;
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
    this.setState({
      life: boardArray,
      generation: ++this.state.generation
      });
  }

  changeSquare (target) {
    var id = target.getAttribute('data-reactid').toString();
    var row = id.substring(6,7);
    var index = id.substring(9,10)
    let boardArray = this.state.life.slice();
    boardArray[row][index] === 1 ? boardArray[row][index] = 0 : boardArray[row][index] = 1;
    this.setState({ life: boardArray});
  }

  clearBoard () {
    let boardArray = [];
    for (let i = 0; i < this.state.life.length; i++) {
      let row = this.state.life[i].map(() => { return 0 });
      boardArray.push(row);
    }
      this.setState({ life: boardArray });
  }

  updateGrid (row, column) {
      let life = this.generateLife(row, column);
      this.setState({
        life: life
       });
  }

  render () {
    return (
      <div className="container text-center">
        <h4>Generation: {this.state.generation}</h4>
        <Board life={this.state.life} handleClick={(target) => this.changeSquare(target)}/>
        <button onClick={this.startCycle}>Start</button>
        <button onClick={this.stopCycle}>Stop</button>
        <button onClick={this.clearBoard}>Clear</button>
        <GridButtons handleSubmit={(row, column) => this.updateGrid(row, column)}/>
      </div>
    );
  }
}

export default Game;
