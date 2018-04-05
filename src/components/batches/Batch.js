import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
// import { getBatches } from '../../actions/batches'
import './Batch.css'

class Batch extends PureComponent {

  handleClick = () => {
    console.log('Hellloooooooo');
    const { batch, history } = this.props
    history.push(`./batches/${batch.id}/students`)
  }

  render() {
    const { batch } = this.props
    return(
      <button className="oneBatch" onClick={ this.handleClick }>
        Batch #{ batch.batchNumber } <br/><br/>
        Students: { batch.student.length }
      </button>
    )
  }

}

export default withRouter(connect(null)(Batch))
