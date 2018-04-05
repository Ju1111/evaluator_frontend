import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addEvaluation } from '../../actions/evaluations'
import EvaluationForm from './EvaluationForm'

class AddEvaluation extends PureComponent {

  handleSubmit = (data) => {
    const batchId =  this.props.match.params.batchId
    const studentId = this.props.match.params.studentId
		this.props.postEvaluation(batchId, studentId, data)
	}

  render() {

    const { history } = this.props
    const batch = this.props.match.params.batchId

    return (
      <div className="addEvaluation">
        <button className="back" onClick={ () => history.push(`/batches/${batch}/students`) }>
          Back to student overview
        </button>
        <EvaluationForm onSubmit={ this.handleSubmit } />
        <p style={{color:'red'}}>{ this.props.addEvaluation.error }</p>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		addEvaluation: state.addEvaluation
	}
}

export default connect(mapStateToProps, { postEvaluation: addEvaluation })(AddEvaluation)
