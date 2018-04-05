import React, {PureComponent} from 'react'
import './BatchForm.css'

export default class BatchForm extends PureComponent {
	state = {
  batchNumber: 0,
    startDate: 0,
    endDate: 0
  }

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
      <div className="addBatch">
  			<form onSubmit={this.handleSubmit}>
  				<div>
            <h3>Please insert the batchnumber, start date and end date (YYYY-DD-MM)</h3>
  					<label htmlFor="batchNumber">Batchnumber</label>
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
