import React, {PureComponent} from 'react'

export default class BatchForm extends PureComponent {
	state = { }

	handleSubmit = (e) => {
    console.log(this.state);
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
      <div className="addStudent">
  			<form onSubmit={this.handleSubmit}>
  				<div>
            <h3>Please insert first name, last name and a link to a picture of the student</h3>
  					<label htmlFor="firstName">First Name</label>
  					<input type="number" name="batchNumber" id="batchNumber" value={
  						this.state.batchNumber || ''
  					} onChange={ this.handleChange } />
  				</div>

  				<div>
  					<label htmlFor="startDate">Start Date</label>
  					<input type="string" name="startDate" id="startDate" value={
  						this.state.startDate || ''
  					} onChange={ this.handleChange } />
  				</div>
  				<div>
  					<label htmlFor="endDate">End Date</label>
  					<input type="string" name="endDate" id="endDate" value={
  						this.state.endDate || ''
  					} onChange={ this.handleChange } />
  				</div>
  				<button type="submit">Add Batch</button>
  			</form>
      </div>
		)
	}
}
