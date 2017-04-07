import React, {Component} from 'react';

class GridButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      row: 25,
      column: 25
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
        <p>Row:
          {this.state.row}
          <span
            onClick={() => this.changeRow(1)}
            className="glyphicon glyphicon-plus">
          </span>
          <span
            onClick={() => this.changeRow(-1)}
            className="glyphicon glyphicon-minus">
          </span>
        </p>
        <p>Column:
          {this.state.column}
          <span
            onClick={() => this.changeCol(1)}
            className="glyphicon glyphicon-plus">
          </span>
          <span
            onClick={() => this.changeCol(-1)}
            className="glyphicon glyphicon-minus">
          </span>
        </p>
        <button type="submit" onClick={() => this.props.handleSubmit(this.state.row, this.state.column)}>Update Grid</button>
      </div>
      )
  }
}

export default GridButtons;
