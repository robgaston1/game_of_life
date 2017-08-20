import React, {Component} from 'react';
import Board from './Board';
import GridButtons from './GridButtons';
import Info from './Info';
import StartButton from './StartButton';
import { connect } from 'react-redux';

class Game extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cycleRunning: false,
      buttonMessage: "Start"
    }
  }

  componentWillReceiveProps() {
    if(!this.isThereLife()) {
      clearInterval(this.state.intervalId);
      this.setState({
        buttonMessage: "Start",
        cycleRunning: false
       })
    }
  }

  isThereLife = () => {
    let lifeArray = this.props.life;
    let lifeStatus = false;
    for (let i = 0; i < lifeArray.length; i++) {
      for (let j = 0; j < lifeArray[i].length; j++) {
        if (lifeArray[i][j] === 1) {
          lifeStatus = true;
        }
      }
    }
    return lifeStatus;
  }

  toggleCycle = () => {
    if (this.state.cycleRunning === false) {
      var intervalId = setInterval(this.stepForward, 300);
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

  stepForward = () => {
    this.props.cycleLife();
    this.props.addGen();
  }

  render () {
    return (
      <div className="container text-center">
        <Info />
        <h4>Generation: {this.props.generation}</h4>
        <Board life={this.props.life} handleClick={(target) => this.props.changeSquare(target)}/>
        <p><strong>Click on a cell to change it's state!</strong></p>
        <StartButton
          startMessage={this.state.buttonMessage}
          disabled={!this.isThereLife()}
          handleStartClick={this.toggleCycle}
          handleClearClick={this.props.clearBoard}/>
        <GridButtons handleSubmit={(row, column) => this.props.updateGrid(row, column)}/>
      </div>
    );
  }
}

export default Game;
