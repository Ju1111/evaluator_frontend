import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getBatches } from '../../actions/batches'
import './Batch.css'

class Batch extends PureComponent {

  handleClick = () => {
    const { batch, history } = this.props
    history.push(`/batches/${batch.id}`)
  }

  render() {
    const { batch } = this.props
    return(
        <button className="oneBatch">Batch #{ batch.batchNumber }</button>
    )
  }

}

const mapStateToProps = state => ({
  batch: state.batches[0]
})

export default withRouter(connect(null)(Batch))
