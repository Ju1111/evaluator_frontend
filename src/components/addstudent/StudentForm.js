import React, {PureComponent} from 'react'
import './StudentForm.css'

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
  					<input type="text" name="firstName" id="firstName" value={
  						this.state.batchNumber || ''
  					} onChange={ this.handleChange } />
  				</div>

  				<div>
  					<label htmlFor="lastName">Last Name</label>
  					<input type="text" name="lastName" id="lastName" value={
  						this.state.startDate || ''
  					} onChange={ this.handleChange } />
  				</div>
  				<div>
  					<label htmlFor="picture">Picture</label>
  					<input type="text" name="picture" id="picture" value={
  						this.state.endDate || ''
  					} onChange={ this.handleChange } />
  				</div>
  				<button type="submit">Add Student</button>
  			</form>
      </div>
		)
	}
}
