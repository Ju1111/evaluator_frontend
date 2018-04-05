import React, {PureComponent} from 'react'
import './EvaluationForm.css'

export default class EvaluationForm extends PureComponent {
	state = { }

	handleSubmit = (e) => {
    e.preventDefault()

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

	render() {
		return (
      <div className="addEvaluation">
  			<form>
  				<div>
            <h3>Happy Evaluating</h3>
  					<label htmlFor="date">Date</label>
  					<input type="date" name="date" id="date" placeholder="leave blank for today"value={
  						this.state.date || ''
  					} onChange={ this.handleChange } />
  				</div>

  				<div>
  					<label htmlFor="colour">Evaluation Colour</label><br/>
  					<input type="radio" name="colour" id="red" value={
  						"red"} onChange={ this.handleChange } />Red<br/>
            <input type="radio" name="colour" id="yellow" value={
  						"yellow"} onChange={ this.handleChange } />Yellow<br/>
            <input type="radio" name="colour" id="green" value={
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
