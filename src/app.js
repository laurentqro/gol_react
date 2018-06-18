import React from 'react'
import ReactDOM from 'react-dom'
import { GOL } from './gol';
import './index.css';

function Row(props) {
  return props.cells.map( (cell) => {
    return (
      <div className="cell">
      </div>
    )
  });
}

class World extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: GOL.createWorld(70, 70).cells
    }
  }

  render() {
    return (
      <div className="world">
      {this.state.rows.map((cells) => {
          return (
              <div className="row">
                {this.renderRow(cells)}
              </div>
          )
        })}
      </div>
    )
  }

  renderRow(cells) {
    return (
      <Row cells={cells} />
    );
  }
}

const app = document.getElementById('app')
ReactDOM.render(<World />, app)
