import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router'
// import { connect } from 'react-redux'
import './AddBatch.css'

class AddBatch extends PureComponent {


  render() {
    const { history } = this.props
    return (
      <div className="batchPage">
        <header className="createHeader">
        </header>
        <button className="back" onClick={ () => history.push('./batches') }>
          Back to batches
        </button>
        <button className="logout" onClick={ () => history.push('./logout') }>
          logout
        </button>
      </div>
    )
  }
}

export default AddBatch
