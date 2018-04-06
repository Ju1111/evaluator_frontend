import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import green from './heart_green.png'
import yellow from './heart_orange.png'
import red from './heart_red.png'
import './Evaluation.css'

class Evaluation extends PureComponent {

  displayColour = () => {
    const { evaluation } = this.props

    switch(evaluation.colour) {
      case 'green':
        return green
      case 'yellow':
        return yellow
      case 'red':
        return red
      default:
        return null
    }
  }

  render() {

    return(
      <div className="evaluation">
        <img alt="evaluationcolour" src={ this.displayColour() } />
      </div>
    )
  }

}

export default connect(null)(Evaluation)
