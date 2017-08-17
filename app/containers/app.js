import React, { Component } from 'react';
import Game from '../components/Game';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.actions.generateLife(20,20);
  }

  render() {
    return (
      <div>
        <Game
          life = { this.props.life }
          generation = { this.props.generation }
          updateLife = {(lifeArray) => this.props.actions.updateLife(lifeArray)}
          changeSquare = {(target)=>this.props.actions.changeSquare(target)}
          cycleLife = {() => this.props.actions.cycleLife()}
          addGen = {() => this.props.actions.addGen()}
          clearBoard = {() => this.props.actions.clearBoard()}
          updateGrid = {(row, column) => this.props.actions.generateLife(row, column)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    life: state.life,
    generation: state.generation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
