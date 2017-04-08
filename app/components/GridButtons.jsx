import React, {Component} from 'react';

class GridButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      row: 20,
      column: 20
    }
  }

  changeRow (val) {
    this.setState({ row: this.state.row + val });
  }

  changeCol (val) {
    this.setState({ column: this.state.column + val });
  }

  render () {
    return (
      <div>
        <h4>Row:</h4>
          <span
            onClick={() => this.changeRow(1)}
            className="glyphicon glyphicon-plus">
          </span>
          <span className="numbers">{this.state.row}</span>
          <span
            onClick={() => this.changeRow(-1)}
            className="glyphicon glyphicon-minus">
          </span>

        <h4>Column:</h4>
          <span
            onClick={() => this.changeCol(1)}
            className="glyphicon glyphicon-plus">
          </span>
          <span className="numbers">{this.state.column}</span>
          <span
            onClick={() => this.changeCol(-1)}
            className="glyphicon glyphicon-minus">
          </span><br/>

        <button
          className="btn btn-large btn-warning"
          onClick={() => this.props.handleSubmit(this.state.row, this.state.column)}>Update Grid</button>
      </div>
      )
  }
}

export default GridButtons;
