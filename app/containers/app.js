import React from 'react';
import Game from '../components/Game';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';


class App extends React.Component {

  componentDidMount() {
    this.props.generateLife();
  }
  render() {
    return (
      <div>
        <Game life={ this.props.life } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    life: state.life
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
