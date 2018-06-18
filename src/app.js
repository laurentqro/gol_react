import React from 'react'
import ReactDOM from 'react-dom'
import { GOL } from './gol';

function Row(props) {
  return props.cells.map( (cell) => {
    return (
      <div className="row">
        {cell.state}
      </div>
    )
  });
}

class World extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: GOL.createWorld(3, 3).cells
    }
  }

  render() {
    return this.state.rows.map((cells) => {
      return (
        <div>
          <div className="row">
            {this.renderRow(cells)}
          </div>
        </div>
      )
    });
  }

  renderRow(cells) {
    return (
      <Row cells={cells} />
    );
  }
}

const app = document.getElementById('app')
ReactDOM.render(<World />, app)
