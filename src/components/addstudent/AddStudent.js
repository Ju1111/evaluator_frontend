import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../../actions/students'
import StudentForm from './StudentForm'

class AddStudent extends PureComponent {

  handleSubmit = (data) => {
		this.props.postStudent(data)
	}

  render() {

    const { history } = this.props

    if (this.props.addStudent.success) return (
      <div className="added">
  			<h2>You have sucessfuly added a student. <br/>Do you want to add another student or get back to the overview?</h2>
        <button className="back" onClick={ () => history.push('./batches') }>
          Add another student
        </button>
        <button className="back" onClick={ () => history.push('./batches') }>
          Back to overview
        </button>
      </div>
		)

    return (
      <div className="addStudent">
        <button className="back" onClick={ () => history.push('./batches') }>
          Back to student overview
        </button>
        <button className="logout" onClick={ () => history.push('./logout') }>
          logout
        </button>
        <StudentForm onSubmit={ this.handleSubmit } />
        <p style={{color:'red'}}>{ this.props.addStudent.error }</p>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		addStudent: state.addStudent
	}
}

export default connect(mapStateToProps, { postStudent: addStudent })(AddStudent)
