import React, {Component} from 'react';
import Board from './Board';
import GridButtons from './GridButtons';
import Info from './Info';
import StartButton from './StartButton';

class Game extends Component {

  constructor(props) {
    super(props)

    this.state = {
      life: this.generateLife(20, 20),
      generation: 0,
      cycleRunning: false,
      buttonMessage: "Start"
    }
    this.iterateCells = this.iterateCells.bind(this);
    this.checkNeighbors = this.checkNeighbors.bind(this);
    this.toggleCycle = this.toggleCycle.bind(this);
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

  toggleCycle () {
    if (this.state.cycleRunning === false) {
      var intervalId = setInterval(this.iterateCells, 300);
      this.setState({
        intervalId: intervalId,
        buttonMessage: "Stop"
        });
    } else {
        clearInterval(this.state.intervalId);
        this.setState({ buttonMessage: "Start" })
    }
    this.setState({ cycleRunning: !this.state.cycleRunning });
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
    let isThereLife = "no";
    for (let i = 0; i < boardArray.length; i++) {
      for (let j = 0; j < boardArray[i].length; j++) {
        let amtNeighbors = this.checkNeighbors(j, i);
        if (boardArray[i][j] === 0 && amtNeighbors === 3) {
          boardArray[i][j] = 1;
          isThereLife = "yes";
        } else if (boardArray[i][j] === 1 && (amtNeighbors < 2 || amtNeighbors > 3)) {
          boardArray[i][j] = 0;
        }
      }
    }
    this.setState({
      life: boardArray,
      generation: ++this.state.generation
      });
      if (isThereLife === "no") {
        this.toggleCycle();
      }
  }

  changeSquare (target) {
    var id = target.getAttribute('data-reactid').split(".");
    var row = id[3].substring(1);
    var index = id[4].substring(1);
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
      this.toggleCycle();
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
        <Info />
        <h4>Generation: {this.state.generation}</h4>
        <Board life={this.state.life} handleClick={(target) => this.changeSquare(target)}/>
        <p><strong>Click on a cell to change it's state!</strong></p>
        <StartButton
          startMessage={this.state.buttonMessage}
          handleStartClick={this.toggleCycle}
          handleClearClick={this.clearBoard}/>
        <GridButtons handleSubmit={(row, column) => this.updateGrid(row, column)}/>
      </div>
    );
  }
}

export default Game;
