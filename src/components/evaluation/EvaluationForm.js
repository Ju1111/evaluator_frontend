import React, {PureComponent} from 'react'
import './EvaluationForm.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import './EvaluationForm.css'
import Evaluation from './Evaluation'

class EvaluationForm extends PureComponent {
	state = { }

	handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state)
    this.props.onSubmit(this.state)
    // const batch = this.props.match.params.batchId
    //
    // const history = this.props
    // history.push(`/students`)
	}

	handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  renderEvaluation = (evaluation) => {
    return (
      <Evaluation
        evaluation={ evaluation }
      />
    )
  }

	render() {

    const { authenticated, batches } = this.props

    const batchId =  this.props.match.params.batchId
    const studentId = this.props.match.params.studentId

    let students

    for (var i = 0; i < batches.length; i++) {
      if(batches[i].id === Number(batchId)) {
        students = batches[i].student
      }
    }

    let student

    for (var s = 0; s < students.length; s++) {
      if(students[s].id === Number(studentId)) {
        student = students[s]
      }
    }

    if(!authenticated) return (
      <Redirect to="/" />
    )

		return (
      <div className="addEvaluation">
  			<form>
          <h3>Happy Evaluating</h3>
          <h4>{ student.firstName } { student.lastName } is waiting for an evaluation!</h4>
          <div className="studentEvaluation">
            <img alt="student" className="picture" src={ student.picture } />
          </div>
          <div className="evaluations">
            { student.evaluation.map(evaluation => this.renderEvaluation(evaluation)) }
          </div>
          <div>
  					<label htmlFor="date">Date</label>
  					<input type="date" name="date" id="date" placeholder="leave blank for today"value={
  						this.state.date || ''
  					} onChange={ this.handleChange } />
  				</div>

  				<div>
  					<label htmlFor="colour">Evaluation Colour</label><br/>
  					<input type="radio" name="colour" id="red" className="red" value={
  						"red"} onChange={ this.handleChange } />Red<br/>
            <input type="radio" name="colour" id="yellow" className="yellow" value={
  						"yellow"} onChange={ this.handleChange } />Yellow<br/>
            <input type="radio" name="colour" id="green" className="green" value={
  						"green"} onChange={ this.handleChange } />Green
  				</div>

  				<div>
  					<label htmlFor="remark">Remark (optional)</label>
  					<input type="text" name="remark" id="remark" value={
  						this.state.remark || ''
  					} onChange={ this.handleChange } />
  				</div>
  				<button onClick={ this.handleSubmit }>Save</button>
  			</form>
      </div>
		)
	}
}

const mapStateToProps = state => ({
  authenticated: state.user !== null,
  batches: state.batches
})

export default withRouter(connect(mapStateToProps)(EvaluationForm))
