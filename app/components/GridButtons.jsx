import React, {Component} from 'react';

class GridButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      row: 10,
      column: 10
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
          <span>{this.state.row}</span>
          <span onClick={() => this.changeRow(1)}>+</span>
          <span onClick={() => this.changeRow(-1)}>-</span>
        </p>
        <p>Column:
          <span>{this.state.column}</span>
          <span onClick={() => this.changeCol(1)}>+</span>
          <span onClick={() => this.changeCol(-1)}>-</span>
        </p>
        <button type="submit" onClick={() => this.props.handleSubmit(this.state.row, this.state.column)}>Update Grid</button>
      </div>
      )
  }
}

export default GridButtons;
