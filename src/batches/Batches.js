import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Batch from './Batch'
import { getBatches } from '../actions/batches'
import { Redirect, Link } from 'react-router-dom'
import { userId } from '../jwt'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

class Batches extends PureComponent {
  static PropTypes = {

  }

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getBatches()
    }
  }

  renderBatch = (batch) => {
    return (
      <Batch />
    )
  }

  render() {

    const { authenticated, history, batches } = this.props

    if(!authenticated) return (
      <Redirect to="/login" />
    )

    return (
      <div className="batchPage">
        <button className="newBatch" onClick={ () => history.push('./newbatch') }>
          Create Batch
        </button>
        <button className="logout" onClick={ () => history.push('./logout') }>
          logout
        </button>
        <h1>Select a batch to see all students</h1>
        <div className="batch">
          { batches.map(batch => this.renderBatch(batch)) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  batches: state.batches === null ?
    null : Object.values(state.batches).sort((a, b) => b.id - a.id)
})

export default withRouter(
  connect(mapStateToProps, { getBatches })(Batches)
)
