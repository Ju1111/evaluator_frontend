import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getBatches } from '../../actions/batches'

class Batch extends PureComponent {

  // componentWillMount() {
  //     this.props.getBatches()
  // }

  handleClick = () => {
    const { batch, history } = this.props
    history.push(`/batches/${batch.id}`)
  }

  render() {
    const { batch } = this.props
    return(
      <div>
        { batch.batchNumber }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  batch: state.batches[0]
})

export default withRouter(connect(null)(Batch))
