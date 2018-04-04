import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Batch from './Batch'
import { getBatches } from '../actions/batches'

class Batches extends PureComponent {
  static PropTypes = {
    
  }

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getBatches()
    }
  }

  render() {
    return (
      <div className="batchPage">
        <h1>Select a batch to see all students</h1>
        <div className="batch">
          <Batch />
        </div>
      </div>
    )
  }
}

export default Batches

// const mapStateToProps = function (state) {
//   return {
//     // currentUser: state.currentUser
//   }
// }


// export default connect(mapStateToProps, { getBatches })(Batches)
