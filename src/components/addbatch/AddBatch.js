import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addBatch } from '../../actions/batches'
import BatchForm from './BatchForm'
import './AddBatch.css'

class AddBatch extends PureComponent {

  handleSubmit = (data) => {
		this.props.postBatch(data)
	}

  render() {

    const { history, postBatch } = this.props

    if (this.props.addBatch.success) return (
      <div className="added">
  			<h2>You have sucessfuly created a new batch. <br/>Please press the button to go back to the batches overview.</h2>
        <button className="back" onClick={ () => history.push('./batches') }>
          Back to batches
        </button>
      </div>
		)

    console.log(postBatch);

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
        <BatchForm onSubmit={ this.handleSubmit } />
        <p style={{color:'red'}}>{ this.props.addBatch.error }</p>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		addBatch: state.addBatch
	}
}

export default connect(mapStateToProps, { postBatch: addBatch })(AddBatch)
